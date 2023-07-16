import styles from "./styles.module.scss";
import { PropsWithChildren } from "react";
import MyInvestmentsNavigation from "@/src/entities/my-investments/ui/MyInvestmenstNavigation";

export default function MyInvestmentsLayout({ children }: PropsWithChildren) {
    return (
        <div className={styles.my_investments}>
            <MyInvestmentsNavigation />
            {children}
        </div>
    );
}
