import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import AnalyticsNavigation from "@/src/entities/analytics/ui/AnalyticsNavigation";

export default function AnalyticsLayout({ children }: PropsWithChildren) {
    return (
        <div className={styles.analytics}>
            <AnalyticsNavigation />
            {children}
        </div>
    );
}
