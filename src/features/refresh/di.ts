import { LockFactory } from "@/src/shared/utils";
import { AuthTokenManager } from "@/src/features/refresh/AuthTokenManager";
import { AuthTokenStorage } from "@/src/entities/auth/utils";
import { AuthManager } from "@/src/entities/auth/api";

export function createAuthTokenManager(authManager: AuthManager): AuthTokenManager | undefined {
    if (typeof window !== "undefined") {
        return new AuthTokenManager(authManager, new AuthTokenStorage(), new LockFactory(window.localStorage));
    }
}
