import { ApiClientFactory, ApiClientFactoryInterface } from "@/src/shared/api-client";
import { HttpHeaders } from "@/src/shared/utils";
import { TransactionProvider } from "@/src/entities/transaction/api/TransactionProvider";

export class TransactionProviderFactory {
    private readonly apiClientFactory: ApiClientFactoryInterface;

    constructor(baseUrl: string, headers: HttpHeaders) {
        this.apiClientFactory = new ApiClientFactory(`${baseUrl}/api/v1/transaction`, headers);
    }

    public createTransactionProvider(authToken: string) {
        return new TransactionProvider(this.apiClientFactory.createAuthorizedClient(authToken));
    }
}
