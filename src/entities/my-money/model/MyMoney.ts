import { Money } from "@/src/shared/models/common";

export interface MyMoney {
    readonly balance: Money;
    readonly reservedFunds: Money;
    readonly investedSum?: Money;
    readonly dividendSum?: Money;
    readonly averageInterestRate?: number;
    readonly numberInvestedProjects: number;
    readonly totalDeposits: Money;
    readonly totalWithdraws: Money;
    readonly earned: Money;
    readonly repaymentDates: Array<string>;
}
