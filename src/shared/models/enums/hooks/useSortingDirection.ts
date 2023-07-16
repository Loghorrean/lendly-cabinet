"use client";

import { SORTING_DIRECTION, SortingDirection } from "@/src/shared/models/enums";
import { Dispatch, SetStateAction, useState } from "react";

export type SortingDirectionProps = {
    direction?: SortingDirection;
    toggleDirection: () => void;
    setDirection?: Dispatch<SetStateAction<SortingDirection | undefined>>;
};

export const useSortingDirection = (
    initial?: SortingDirection
): [SortingDirection | undefined, () => void, Dispatch<SetStateAction<SortingDirection | undefined>>] => {
    const [direction, setDirection] = useState<SortingDirection | undefined>(initial);
    const handleToggle = () => {
        if (direction === undefined) {
            setDirection(SORTING_DIRECTION.ASC);
            return;
        }
        if (direction === SORTING_DIRECTION.ASC) {
            setDirection(SORTING_DIRECTION.DESC);
            return;
        }
        setDirection(undefined);
    };
    return [direction, handleToggle, setDirection];
};
