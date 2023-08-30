import { Money } from "@/src/shared/models/common";

export interface ProjectLoan {
    readonly interestRate?: number;
    readonly initialTerm: number;
    readonly objectType?: string;
    readonly loanSum?: Money;
    readonly investedSum?: Money;
    readonly countInvestors: number;
    readonly collateralSum?: Money;
    readonly ltv?: number;
    readonly maturityDate?: string;
}
