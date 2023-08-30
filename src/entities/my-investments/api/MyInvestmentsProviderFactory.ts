import { ApiClientFactory, ApiClientFactoryInterface } from "@/src/shared/api-client";
import { HttpHeaders } from "@/src/shared/utils";
import { MyInvestmentsProvider } from "@/src/entities/my-investments/api/MyInvestmentsProvider";

export class MyInvestmentsProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/investment`, headers);
    }

    public createInvestmentsProvider(authToken: string) {
        return new MyInvestmentsProvider(this.apiClientFactory.createAuthorizedClient(authToken));
    }
}
