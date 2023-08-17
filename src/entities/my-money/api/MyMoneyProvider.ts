import { ApiClientInterface } from "@/src/shared/api-client";
import { MyMoney } from "@/src/entities/my-money/model";

export class MyMoneyProvider {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getMyMoney(): Promise<MyMoney> {
        return this.apiClient.get("/");
    }
}
