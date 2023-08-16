import { ApiClientInterface } from "@/src/shared/api-client";
import { FundraisingProject, PrimaryMarketListFilter } from "@/src/entities/primary-market/model";
import { DataCollection } from "@/src/shared/models/common";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";

export class PrimaryMarketProjectProvider {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getList(
        filter: PrimaryMarketListFilter,
        page: number,
        perPage: number
    ): Promise<DataCollection<FundraisingProject>> {
        return this.apiClient.get(`/fund-raising?${buildQuery({ filter, page, perPage })}`);
    }
}
