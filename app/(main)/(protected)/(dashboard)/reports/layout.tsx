import styles from "./styles.module.scss";
import { PropsWithChildren } from "react";
import ReportsNavigation from "@/src/entities/reports/ui/ReportsNavigation";

export default function ReportsLayout({ children }: PropsWithChildren) {
    return (
        <div className={styles.reports}>
            <ReportsNavigation />
            {children}
        </div>
    );
}
