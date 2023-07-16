"use client";

import { usePathname } from "next/navigation";
import CommonNavigation from "@/src/shared/ui/blocks/CommonNavigation";

const ReportsNavigation = () => {
    const path = usePathname();
    return (
        <CommonNavigation heading="Документы и отчеты">
            <CommonNavigation.List>
                <CommonNavigation.Link href="/reports/documents" explicitActive={path === "/reports"}>
                    Документы
                </CommonNavigation.Link>
                <CommonNavigation.Link href="/reports/transactions">Транзакции</CommonNavigation.Link>
                <CommonNavigation.Link href="/reports/payments">График выплат</CommonNavigation.Link>
            </CommonNavigation.List>
        </CommonNavigation>
    );
};

export default ReportsNavigation;
