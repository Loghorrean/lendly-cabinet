import React, { FC, PropsWithChildren } from "react";
import styles from "./SvgContainer.module.scss";
import { cn, ObjectValues } from "@/src/shared/utils";

export const SVG_CONTAINER_SIZE = {
    SIZE_8: styles.svg_container___8,
    SIZE_10: styles.svg_container___10,
    SIZE_12: styles.svg_container___12,
    SIZE_14: styles.svg_container___14,
    SIZE_16: styles.svg_container___16,
    SIZE_18: styles.svg_container___18,
    SIZE_20: styles.svg_container___20,
    SIZE_24: styles.svg_container___24,
    SIZE_28: styles.svg_container___28,
    SIZE_32: styles.svg_container___32,
} as const;

export type SvgContainerSize = ObjectValues<typeof SVG_CONTAINER_SIZE>;

interface Props {
    size?: SvgContainerSize;
}

const SvgContainer: FC<PropsWithChildren<Props>> = ({ size = SVG_CONTAINER_SIZE.SIZE_16, children }) => {
    return (
        <span className={cn(styles.svg_container, size)} data-svg-container="true">
            {children}
        </span>
    );
};

export default SvgContainer;
