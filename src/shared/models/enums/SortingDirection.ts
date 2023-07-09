import { ObjectValues } from "@/src/shared/utils";

export const SORTING_DIRECTION = {
    ASC: "ASC",
    DESC: "DESC",
} as const;

export type SortingDirection = ObjectValues<typeof SORTING_DIRECTION>;
