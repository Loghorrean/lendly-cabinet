import { createAuthManager } from "@/src/entities/auth/api";
import { AuthTokenManager } from "@/src/entities/auth/utils/AuthTokenManager";
import { AuthTokenStorage } from "@/src/entities/auth/utils/AuthTokenStorage";
import { LockFactory } from "@/src/shared/utils";

export function createAuthTokenManager(): AuthTokenManager {
    return new AuthTokenManager(createAuthManager(), new AuthTokenStorage(), new LockFactory(window.localStorage));
}

//TODO: REWORK THIS SHITTY LOGIC
export async function getAuthToken(): Promise<string> {
    const manager = createAuthTokenManager();
    return manager?.get() ?? "";
}
