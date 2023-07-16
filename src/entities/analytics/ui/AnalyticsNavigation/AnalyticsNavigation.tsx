"use client";

import CommonNavigation from "@/src/shared/ui/blocks/CommonNavigation";
import { usePathname } from "next/navigation";

const AnalyticsNavigation = () => {
    const path = usePathname();
    return (
        <CommonNavigation heading="Аналитика">
            <CommonNavigation.List>
                <CommonNavigation.Link href="/analytics/portfolio" explicitActive={path === "/analytics"}>
                    Аналитика по портфелю
                </CommonNavigation.Link>
                <CommonNavigation.Link href="/analytics/platform">Аналитика по платформе</CommonNavigation.Link>
            </CommonNavigation.List>
        </CommonNavigation>
    );
};

export default AnalyticsNavigation;
