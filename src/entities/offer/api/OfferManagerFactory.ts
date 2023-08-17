import { ApiClientFactory, ApiClientFactoryInterface } from "@/src/shared/api-client";
import { HttpHeaders } from "@/src/shared/utils";
import { OfferManager } from "@/src/entities/offer/api/OfferManager";

export class OfferManagerFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/offer`, headers);
    }

    public createOfferManager(authToken: string) {
        return new OfferManager(this.apiClientFactory.createAuthorizedClient(authToken));
    }
}
