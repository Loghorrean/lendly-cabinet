import { BlockProps, cn } from "@/src/shared/utils";
import styles from "./CommonInputBlock.module.scss";

const CommonInputBlock = ({ children, className, ...props }: BlockProps) => {
    return (
        <div className={cn(styles.common_input_block, className)} {...props}>
            {children}
        </div>
    );
};

export default CommonInputBlock;
