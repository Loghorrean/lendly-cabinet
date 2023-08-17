import { ApiClientInterface } from "@/src/shared/api-client";
import { OfferListFilter } from "@/src/entities/offer/model";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";

export class OfferManager {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getOffersList(page: number, perPage: number, filter: OfferListFilter) {
        return this.apiClient.get(`/?${buildQuery({ page, perPage, filter })}`);
    }
}
