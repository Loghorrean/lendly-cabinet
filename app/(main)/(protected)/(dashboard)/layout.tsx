import styles from "./styles.module.scss";
import { PropsWithChildren } from "react";
import DashboardMenu from "@/src/widgets/layout/DashboardMenu";

export default function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <div className={styles.dashboard_layout}>
            <DashboardMenu />
            {children}
        </div>
    );
}
