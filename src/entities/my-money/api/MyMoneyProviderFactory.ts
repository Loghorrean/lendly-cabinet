import { ApiClientFactory, ApiClientFactoryInterface } from "@/src/shared/api-client";
import { HttpHeaders } from "@/src/shared/utils";
import { MyMoneyProvider } from "@/src/entities/my-money/api/MyMoneyProvider";

export class MyMoneyProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/my-money`, headers);
    }

    public createMyMoneyProvider(authToken: string): MyMoneyProvider {
        return new MyMoneyProvider(this.apiClientFactory.createAuthorizedClient(authToken));
    }
}
