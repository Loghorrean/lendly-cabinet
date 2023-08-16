import { ApiClientFactory, ApiClientFactoryInterface } from "@/src/shared/api-client";
import { HttpHeaders } from "@/src/shared/utils";
import { PrimaryMarketProjectProvider } from "@/src/entities/primary-market/api/PrimaryMarketProjectProvider";

export class PrimaryMarketProjectProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/project`, headers);
    }

    public createPrimaryMarketProjectProvider(authToken: string) {
        return new PrimaryMarketProjectProvider(this.apiClientFactory.createAuthorizedClient(authToken));
    }
}
