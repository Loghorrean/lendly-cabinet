import styles from "./ChartEntry.module.scss";
import { PropsWithChildren, ReactNode } from "react";
import { BlockProps, cn } from "@/src/shared/utils";

type Props = BlockProps<HTMLLIElement> & {
    label: ReactNode;
};

const ChartEntry = ({ label, children, ...props }: PropsWithChildren<Props>) => {
    return (
        <li {...props} className={cn(styles.chart_entry, props.className)}>
            <span className={styles.chart_entry__label}>{label}</span>
            <p className={styles.chart_entry__amount}>{children}</p>
        </li>
    );
};

export default ChartEntry;
