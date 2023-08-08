import { ApiClientFactory, ApiClientFactoryInterface } from "@/src/shared/api-client";
import { HttpHeaders } from "@/src/shared/utils";
import { ProfileManager } from "@/src/entities/profile/api/ProfileManager";

export class ProfileManagerFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/profile`, headers);
    }

    public createProfileManager(authToken: string) {
        return new ProfileManager(this.apiClientFactory.createAuthorizedClient(authToken));
    }
}
