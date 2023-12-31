import { cn, PolymorphicBlockProps, resultIf } from "@/src/shared/utils";
import styles from "./CommonBlock.module.scss";
import { ElementType } from "react";
import CommonBlockTitle from "@/src/shared/ui/blocks/CommonBlock/composables/CommonBlockTitle";

export type CommonBlockProps<T extends ElementType> = PolymorphicBlockProps<T> & {
    large?: boolean;
};

function CommonBlock<T extends ElementType = "section">({ large, as, children, ...props }: CommonBlockProps<T>) {
    const Component = as ?? "section";
    return (
        <Component
            {...props}
            className={cn(styles.common_block, resultIf(large, styles.common_block___large), props.className)}
        >
            {children}
        </Component>
    );
}

CommonBlock.Title = CommonBlockTitle;

export default CommonBlock;
