import styles from "./CommonTableHeader.module.scss";
import { Children } from "react";
import { BlockProps, cn } from "@/src/shared/utils";

const CommonTableHeader = ({ children, ...props }: BlockProps) => {
    const renderCells = () => {
        return Children.map(children, child => {
            return <div className={styles.common_table_header__cell}>{child}</div>;
        });
    };
    return (
        <header {...props} className={cn(styles.common_table_header, props.className)}>
            {renderCells()}
        </header>
    );
};

export default CommonTableHeader;
