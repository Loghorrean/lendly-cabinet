import { ShortProject } from "@/src/entities/project/model";
import { Money } from "@/src/shared/models/common";

export interface SellingOffer {
    readonly uuid: string;
    readonly project: ShortProject;
    readonly investmentMoney: Money;
    readonly price: Money;
    readonly buyback: boolean;
    readonly leftMonths: number;
    readonly leftDays: number;
    readonly profit: number;
    readonly ltv?: number;
    readonly salePercent?: number;
}
