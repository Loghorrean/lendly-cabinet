"use client";

import { usePathname } from "next/navigation";
import CommonNavigation from "@/src/shared/ui/blocks/CommonNavigation";
import styles from "./MyInvestmentsNavigation.module.scss";
import { cn, resultIf } from "@/src/shared/utils";

const MyInvestmentsNavigation = () => {
    const path = usePathname();
    return (
        <CommonNavigation heading="Мои инвестиции">
            <CommonNavigation.List className={styles.my_investments_navigation__list}>
                <CommonNavigation.Link
                    href="/portfolio/fundraising"
                    explicitActive={path === "/portfolio"}
                    className={styles.my_investments_navigation__link}
                >
                    Сбор средств
                    <div
                        className={cn(
                            styles.my_investments_navigation__count,
                            resultIf(
                                path === "/portfolio" || path === "/portfolio/fundraising",
                                styles.my_investments_navigation__count___current
                            )
                        )}
                    >
                        18
                    </div>
                </CommonNavigation.Link>
                <CommonNavigation.Link href="/portfolio/active" className={styles.my_investments_navigation__link}>
                    Активные
                    <div
                        className={cn(
                            styles.my_investments_navigation__count,
                            resultIf(path === "/portfolio/active", styles.my_investments_navigation__count___current)
                        )}
                    >
                        126
                    </div>
                </CommonNavigation.Link>
                <CommonNavigation.Link href="/portfolio/selling" className={styles.my_investments_navigation__link}>
                    На продаже
                    <div
                        className={cn(
                            styles.my_investments_navigation__count,
                            resultIf(path === "/portfolio/selling", styles.my_investments_navigation__count___current)
                        )}
                    >
                        126
                    </div>
                </CommonNavigation.Link>
                <CommonNavigation.Link href="/portfolio/expired" className={styles.my_investments_navigation__link}>
                    В просрочке
                    <div
                        className={cn(
                            styles.my_investments_navigation__count,
                            styles.my_investments_navigation__count___expired,
                            resultIf(path === "/portfolio/expired", styles.my_investments_navigation__count___current)
                        )}
                    >
                        8
                    </div>
                </CommonNavigation.Link>
                <CommonNavigation.Link href="/portfolio/finished" className={styles.my_investments_navigation__link}>
                    Завершенные
                    <div
                        className={cn(
                            styles.my_investments_navigation__count,
                            resultIf(path === "/portfolio/finished", styles.my_investments_navigation__count___current)
                        )}
                    >
                        126
                    </div>
                </CommonNavigation.Link>
                <CommonNavigation.Link href="/portfolio/buyback" className={styles.my_investments_navigation__link}>
                    Проданные с buy back
                    <div
                        className={cn(
                            styles.my_investments_navigation__count,
                            resultIf(path === "/portfolio/buyback", styles.my_investments_navigation__count___current)
                        )}
                    >
                        126
                    </div>
                </CommonNavigation.Link>
            </CommonNavigation.List>
        </CommonNavigation>
    );
};

export default MyInvestmentsNavigation;
