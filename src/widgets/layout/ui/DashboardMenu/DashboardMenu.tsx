"use client";

import styles from "./DashboardMenu.module.scss";
import { ProjectLink } from "@/src/shared/ui/links";
import WalletIcon from "@/src/shared/ui/svg/menu/WalletIcon";
import ChartIcon from "@/src/shared/ui/svg/menu/ChartIcon";
import LightningIcon from "@/src/shared/ui/svg/menu/LightningIcon";
import SettingsIcon from "@/src/shared/ui/svg/menu/SettingsIcon";
import FolderIcon from "@/src/shared/ui/svg/menu/FolderIcon";
import ChatIcon from "@/src/shared/ui/svg/menu/ChatIcon";
import { usePathname } from "next/navigation";

const DashboardMenu = () => {
    const pathName = usePathname();
    return (
        <aside className={styles.dashboard_menu}>
            <ul className={styles.dashboard_menu__list}>
                <li className={styles.dashboard_menu__element}>
                    <ProjectLink href="/dashboard" className={styles.dashboard_menu__link}>
                        <WalletIcon />
                        Активы
                    </ProjectLink>
                </li>
                <li className={styles.dashboard_menu__element}>
                    <ProjectLink
                        href="/market"
                        explicitActive={pathName.startsWith("/market")}
                        className={styles.dashboard_menu__link}
                    >
                        <ChartIcon />
                        Инвестировать
                    </ProjectLink>
                </li>
                <li className={styles.dashboard_menu__element}>
                    <ProjectLink href="/portfolio" className={styles.dashboard_menu__link}>
                        <LightningIcon />
                        Мои инвестиции
                    </ProjectLink>
                </li>
                <li className={styles.dashboard_menu__element}>
                    <ProjectLink href="/analytics" className={styles.dashboard_menu__link}>
                        <WalletIcon />
                        Аналитика
                    </ProjectLink>
                </li>
                <li className={styles.dashboard_menu__element}>
                    <ProjectLink href="/documents" className={styles.dashboard_menu__link}>
                        <SettingsIcon />
                        Документы и отчеты
                    </ProjectLink>
                </li>
                <li className={styles.dashboard_menu__element}>
                    <ProjectLink href="/archive" className={styles.dashboard_menu__link}>
                        <FolderIcon />
                        Архив проектов
                    </ProjectLink>
                </li>
            </ul>
            <div className={styles.dashboard_menu__contacts_us}>
                <ProjectLink href="/contact-us" className={styles.dashboard_menu__contacts_us_link}>
                    <ChatIcon />
                    Связаться с нами
                </ProjectLink>
            </div>
        </aside>
    );
};

export default DashboardMenu;
