"use client";

import CommonNavigation from "@/src/shared/ui/blocks/CommonNavigation";
import SmallLockIcon from "@/src/shared/ui/svg/common/SmallLockIcon";
import styles from "./MarketNavigation.module.scss";
import { usePathname } from "next/navigation";

const MarketNavigation = () => {
    const path = usePathname();
    return (
        <CommonNavigation heading="Доступные предложения">
            <CommonNavigation.List>
                <CommonNavigation.Link href="/market/primary" explicitActive={path === "/market"}>
                    Первичный рынок
                    <div className={styles.market_navigation__lock}>
                        <SmallLockIcon />
                    </div>
                </CommonNavigation.Link>
                <CommonNavigation.Link href="/market/secondary">Вторичный рынок</CommonNavigation.Link>
            </CommonNavigation.List>
        </CommonNavigation>
    );
};

export default MarketNavigation;
