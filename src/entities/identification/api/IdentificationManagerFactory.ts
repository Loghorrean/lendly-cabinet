import { ApiClientFactory, ApiClientFactoryInterface } from "@/src/shared/api-client";
import { HttpHeaders } from "@/src/shared/utils";
import { IdentificationManager } from "@/src/entities/identification/api/IdentificationManager";

export class IdentificationManagerFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/identification`, headers);
    }

    public createIdentificationManager(authToken: string) {
        return new IdentificationManager(this.apiClientFactory.createAuthorizedClient(authToken));
    }
}
