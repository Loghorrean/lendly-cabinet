import styles from "./RoundChartEntry.module.scss";
import { PropsWithChildren, ReactNode } from "react";
import { BlockProps, cn } from "@/src/shared/utils";

type Props = BlockProps<HTMLLIElement> & {
    label: ReactNode;
};

const RoundChartEntry = ({ label, children, ...props }: PropsWithChildren<Props>) => {
    return (
        <li {...props} className={cn(styles.round_chart_entry, props.className)}>
            <span className={styles.round_chart_entry__label}>{label}</span>
            <p className={styles.round_chart_entry__amount}>{children}</p>
        </li>
    );
};

export default RoundChartEntry;
