import dayjs from "dayjs";
import { Unauthorized } from "@/src/shared/models/errors";
import { AuthTokenExpired, LockFactory } from "@/src/shared/utils";
import { AuthManager } from "@/src/entities/auth/api";
import { AuthTokenStorage } from "@/src/entities/auth/utils/index";
import { BearerToken } from "@/src/entities/auth/model";

export class AuthTokenManager {
    constructor(
        private readonly authManager: AuthManager,
        private readonly authTokenStorage: AuthTokenStorage,
        private readonly lockFactory: LockFactory
    ) {}

    public async has(): Promise<boolean> {
        const authToken = await this.resolve();
        return authToken !== null;
    }

    public async get(): Promise<string> {
        const authToken = await this.resolve();
        if (!authToken) {
            throw new AuthTokenExpired();
        }
        return authToken;
    }

    public create(bearerToken: BearerToken): void {
        this.authTokenStorage.set(bearerToken);
    }

    public remove(): void {
        this.authTokenStorage.remove();
    }

    private async resolve(): Promise<string | null> {
        const lock = this.lockFactory.createLock("auth-token:resolve");
        try {
            await lock.acquire();

            const bearerToken = this.authTokenStorage.get();
            if (!bearerToken) {
                return null;
            }
            if (dayjs(bearerToken.accessTokenExpiredAt).diff(dayjs()) > 0) {
                return bearerToken.accessToken;
            }
            return this.refresh();
        } finally {
            lock.release();
        }
    }

    private async refresh(): Promise<string | null> {
        const oldBearerToken = this.authTokenStorage.get();
        if (oldBearerToken === null) {
            return null;
        }
        if (dayjs(oldBearerToken.refreshTokenExpiredAt).diff(dayjs()) <= 0) {
            return null;
        }
        let bearerToken: BearerToken;
        try {
            bearerToken = await this.authManager.refresh(oldBearerToken.refreshToken);
            this.authTokenStorage.set(bearerToken);
            return bearerToken.accessToken;
        } catch (error) {
            if (error instanceof Unauthorized) {
                return null;
            }
            console.error(error);
            throw error;
        }
    }
}
