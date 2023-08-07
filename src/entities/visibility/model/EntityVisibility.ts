import { ObjectValues } from "@/src/shared/utils";

export const ENTITY_VISIBILITY = {
    ROWS: "ROWS",
    CARDS: "CARDS",
} as const;

export type EntityVisibility = ObjectValues<typeof ENTITY_VISIBILITY>;
