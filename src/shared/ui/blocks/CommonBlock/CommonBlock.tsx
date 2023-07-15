import { cn, PolymorphicBlockProps } from "@/src/shared/utils";
import styles from "./CommonBlock.module.scss";
import { ElementType } from "react";
import CommonBlockTitle from "@/src/shared/ui/blocks/CommonBlock/composables/CommonBlockTitle";

export type CommonBlockProps<T extends ElementType> = PolymorphicBlockProps<T>;

function CommonBlock<T extends ElementType = "section">({ as, children, ...props }: CommonBlockProps<T>) {
    const Component = as ?? "section";
    return (
        <Component {...props} className={cn(styles.common_block, props.className)}>
            {children}
        </Component>
    );
}

CommonBlock.Title = CommonBlockTitle;

export default CommonBlock;
