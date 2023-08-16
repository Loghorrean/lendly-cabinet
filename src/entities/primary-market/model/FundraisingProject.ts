import { Money } from "@/src/shared/models/common";

export interface FundraisingProject {
    uuid: string;
    paymentCode?: string;
    name: string;
    interestRate?: number;
    initialTerm: number;
    targetSum: Money;
    countLenders: number;
    investedSum?: Money;
    maturityDate?: string;
}
