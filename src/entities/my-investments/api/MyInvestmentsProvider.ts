import { ApiClientInterface } from "@/src/shared/api-client";
import { DataCollection } from "@/src/shared/models/common";
import { FundraisingProjectInvestment, LoanPaymentProjectInvestment } from "@/src/entities/my-investments/model";

export class MyInvestmentsProvider {
    constructor(private readonly apiClient: ApiClientInterface) {}

    public async getListFundraising(
        page: number,
        perPage: number
    ): Promise<DataCollection<FundraisingProjectInvestment>> {
        return this.apiClient.get("/fund-raising/owned", { page, perPage });
    }

    public async getListLoanPaymentOwned(
        page: number,
        perPage: number
    ): Promise<DataCollection<LoanPaymentProjectInvestment>> {
        return this.apiClient.get("/loan-payment", { page, perPage });
    }
}
