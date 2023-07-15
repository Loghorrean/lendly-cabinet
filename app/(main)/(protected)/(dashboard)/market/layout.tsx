import { PropsWithChildren } from "react";
import MarketNavigation from "@/src/entities/market/ui/MarketNavigation";
import styles from "./styles.module.scss";

export default function InvestLayout({ children }: PropsWithChildren) {
    return (
        <div className={styles.market_container}>
            <MarketNavigation />
            {children}
        </div>
    );
}
