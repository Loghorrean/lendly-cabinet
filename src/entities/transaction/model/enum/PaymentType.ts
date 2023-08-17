import { ObjectValues } from "@/src/shared/utils";

export const PAYMENT_TYPE = {
    CREDIT: "credit",
    DEBIT: "debit",
} as const;

export type PaymentType = ObjectValues<typeof PAYMENT_TYPE>;
