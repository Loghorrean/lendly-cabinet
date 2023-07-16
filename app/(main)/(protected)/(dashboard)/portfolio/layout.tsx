import styles from "./styles.module.scss";
import { PropsWithChildren } from "react";
import MyInvestmentsNavigation from "../../../../../src/entities/my-investments/ui/MyInvestmentsNavigation";

export default function MyInvestmentsLayout({ children }: PropsWithChildren) {
    return (
        <div className={styles.my_investments}>
            <MyInvestmentsNavigation />
            {children}
        </div>
    );
}
