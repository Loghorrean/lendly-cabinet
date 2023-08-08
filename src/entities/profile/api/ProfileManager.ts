import { UserProfile } from "@/src/entities/profile/model";
import { ApiClientInterface } from "@/src/shared/api-client";
import { UuidResult } from "@/src/shared/models/common";

export class ProfileManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getProfile(): Promise<UserProfile> {
        return this.apiClient.get("");
    }

    public async sendChangePasswordRequest(): Promise<UuidResult> {
        return this.apiClient.post("/change-password-request");
    }
}
