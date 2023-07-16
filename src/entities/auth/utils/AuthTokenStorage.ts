import { BearerToken } from "@/src/entities/auth/model";

const AUTH_TOKEN_KEY = "authToken";

type AuthToken = BearerToken;

export class AuthTokenStorage {
    get(): AuthToken | null {
        const value = localStorage.getItem(AUTH_TOKEN_KEY);
        if (!value) {
            return null;
        }
        const data = JSON.parse(value);
        return {
            accessToken: data.accessToken,
            accessTokenExpiredAt: new Date(data.accessTokenExpiredAt),
            refreshToken: data.refreshToken,
            refreshTokenExpiredAt: new Date(data.refreshTokenExpiredAt),
        };
    }

    set(authToken: AuthToken): void {
        const value = JSON.stringify(authToken);
        localStorage.setItem(AUTH_TOKEN_KEY, value);
    }

    remove(): void {
        localStorage.removeItem(AUTH_TOKEN_KEY);
    }
}
