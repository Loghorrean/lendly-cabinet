import { Money } from "@/src/shared/models/common";

export interface ProjectInvestment {
    uuid: string;
    money: Money;
    createdAt: string;
    guarantorPercent?: number;
    nextRepaymentSum?: Money;
    sumForSale?: Money;
    isPrimary: boolean;
}
