import { ObjectValues } from "@/src/shared/utils";

export const IDENTIFICATION_STATUS = {
    NOT_VERIFIED: "NOT_VERIFIED",
    INFO_REQUESTED: "INFO_REQUESTED",
    VERIFIED: "VERIFIED",
    UPDATE_REQUESTED: "UPDATE_REQUESTED",
} as const;

export type IdentificationStatus = ObjectValues<typeof IDENTIFICATION_STATUS>;
