import { ObjectValues } from "@/src/shared/utils";

export const ROLE = {
    BORROWER: "BORROWER",
    LENDER: "LENDER",
} as const;

export type Role = ObjectValues<typeof ROLE>;
