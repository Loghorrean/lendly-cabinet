import styles from "./CommonInputBlock.module.scss";
import { PropsWithChildren } from "react";
import { BlockProps, cn } from "@/src/shared/utils";

const CommonInputBlock = ({ children, ...props }: PropsWithChildren<BlockProps>) => {
    return (
        <div {...props} className={cn(styles.common_input_block, props.className)}>
            {children}
        </div>
    );
};

export default CommonInputBlock;
