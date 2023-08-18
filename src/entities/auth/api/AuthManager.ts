import { ApiClientInterface } from "@/src/shared/api-client";
import { BearerTokenConverter } from "@/src/entities/auth/utils";
import { BearerToken } from "@/src/entities/auth/model";

export class AuthManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    async login(username: string, password: string): Promise<BearerToken> {
        const data = await this.apiClient.post("/login", {
            username,
            password,
        });
        return BearerTokenConverter.apiToClient(data);
    }

    async autologin(token: string): Promise<BearerToken> {
        const data = await this.apiClient.post("/autologin", {
            token,
        });
        return BearerTokenConverter.apiToClient(data);
    }

    async refresh(token: string): Promise<BearerToken> {
        const data = await this.apiClient.post("/refresh", { token });
        return BearerTokenConverter.apiToClient(data);
    }
}
