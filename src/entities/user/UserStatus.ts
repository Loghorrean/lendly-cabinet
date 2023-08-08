import { ObjectValues } from "@/src/shared/utils";

export const USER_STATUS = {
    INDIVIDUAL: "INDIVIDUAL",
    ENTREPRENEUR: "ENTREPRENEUR",
    LEGAL_ENTITY: "LEGAL_ENTITY",
} as const;

export type UserStatus = ObjectValues<typeof USER_STATUS>;
