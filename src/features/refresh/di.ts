import { ApolloClient } from "@apollo/client";
import { AuthTokenManager } from "@/src/features/refresh-token/api/AuthTokenManager";
import { AuthTokenStorage } from "@/src/features/auth/utils";
import { LockFactory } from "@/src/shared/utils";

export function createAuthTokenManager(client?: ApolloClient<any>): AuthTokenManager | undefined {
    if (typeof window !== "undefined") {
        return new AuthTokenManager(client, new AuthTokenStorage(), new LockFactory(window.localStorage));
    }
}
