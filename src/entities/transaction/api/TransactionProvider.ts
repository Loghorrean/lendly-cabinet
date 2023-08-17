import { ApiClientInterface } from "@/src/shared/api-client";
import { ExportStatementFilter, TransactionListFilter } from "@/src/entities/transaction/model/filter";
import buildQuery from "@/src/shared/utils/functions/router/buildQuery";
import { DataCollection, UrlResult } from "@/src/shared/models/common";
import { Transaction } from "@/src/entities/transaction/model";

export class TransactionProvider {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getTransactionsList(
        page: number,
        perPage: number,
        filter?: TransactionListFilter
    ): Promise<DataCollection<Transaction>> {
        return this.apiClient.get(`/?${buildQuery({ filter, page, perPage })}`);
    }

    public async exportStatement(filter?: ExportStatementFilter): Promise<UrlResult> {
        return this.apiClient.get(`/export-statement?${buildQuery({ filter })}`);
    }
}
