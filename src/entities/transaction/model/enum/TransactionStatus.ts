import { ObjectValues } from "@/src/shared/utils";

export const TRANSACTION_STATUS = {
    PENDING: "PENDING",
    CANCELED: "CANCELED",
    COMPLETED: "COMPLETED",
} as const;

export type TransactionStatus = ObjectValues<typeof TRANSACTION_STATUS>;
