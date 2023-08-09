import { UserProfile } from "@/src/entities/profile/model";
import { ApiClientInterface } from "@/src/shared/api-client";
import { UuidResult } from "@/src/shared/models/common";
import { PhoneResult } from "@/src/entities/phone/models";
import { AddPhoneInput } from "@/src/entities/profile/hooks/useAddPhoneMutation";
import { VerifyPhoneInput } from "@/src/entities/profile/hooks/useVerifyPhoneMutation";

export class ProfileManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getProfile(): Promise<UserProfile> {
        return this.apiClient.get("");
    }

    public async sendChangePasswordRequest(): Promise<UuidResult> {
        return this.apiClient.post("/change-password-request");
    }

    public async addPhone(input: AddPhoneInput): Promise<PhoneResult> {
        return this.apiClient.post("/add-phone", input);
    }

    public async verifyPhone(input: VerifyPhoneInput): Promise<PhoneResult> {
        return this.apiClient.post("/verify-phone", input);
    }
}
