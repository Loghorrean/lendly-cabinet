import { Money } from "@/src/shared/models/common";

export interface ShortRepayment {
    readonly date: string;
    readonly month: number;
    readonly overdue: boolean;
    readonly total: Money;
}
