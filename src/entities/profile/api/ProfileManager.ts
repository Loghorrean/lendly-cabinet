import { UserProfile } from "@/src/entities/profile/model";
import { ApiClientInterface } from "@/src/shared/api-client";

export class ProfileManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getProfile(): Promise<UserProfile> {
        return this.apiClient.get("");
    }
}
