import { ObjectValues } from "@/src/shared/utils";

export const COMMON_NOTIFICATION_TYPE = {
    LINEAR: "LINEAR",
    ABSOLUTE: "ABSOLUTE",
} as const;

export type CommonNotificationType = ObjectValues<typeof COMMON_NOTIFICATION_TYPE>;
