import styles from "./CommonTableCell.module.scss";
import { BlockProps, cn } from "@/src/shared/utils";

const CommonTableCell = ({ ...props }: BlockProps) => {
    return (
        <div {...props} className={cn(styles.common_table_cell, props.className)}>
            {props.children}
        </div>
    );
};

export default CommonTableCell;
