import styles from "./DashboardMenu.module.scss";
import { ProjectLink } from "@/src/shared/ui/links";
import WalletIcon from "@/src/shared/ui/svg/menu/WalletIcon";
import ChartIcon from "@/src/shared/ui/svg/menu/ChartIcon";
import LightningIcon from "@/src/shared/ui/svg/menu/LightningIcon";
import SettingsIcon from "@/src/shared/ui/svg/menu/SettingsIcon";
import FolderIcon from "@/src/shared/ui/svg/menu/FolderIcon";

const DashboardMenu = () => {
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
                    <ProjectLink href="/invest" className={styles.dashboard_menu__link}>
                        <ChartIcon />
                        <span className={styles.dashboard_menu__text}>Инвестировать</span>
                    </ProjectLink>
                </li>
                <li className={styles.dashboard_menu__element}>
                    <ProjectLink href="/my-investments" className={styles.dashboard_menu__link}>
                        <LightningIcon />
                        <span className={styles.dashboard_menu__text}>Мои инвестиции</span>
                    </ProjectLink>
                </li>
                <li className={styles.dashboard_menu__element}>
                    <ProjectLink href="/analytics" className={styles.dashboard_menu__link}>
                        <WalletIcon />
                        <span className={styles.dashboard_menu__text}>Аналитика</span>
                    </ProjectLink>
                </li>
                <li className={styles.dashboard_menu__element}>
                    <ProjectLink href="/documents" className={styles.dashboard_menu__link}>
                        <SettingsIcon />
                        <span className={styles.dashboard_menu__text}>Документы и отчеты</span>
                    </ProjectLink>
                </li>
                <li className={styles.dashboard_menu__element}>
                    <ProjectLink href="/archive" className={styles.dashboard_menu__link}>
                        <FolderIcon />
                        <span className={styles.dashboard_menu__text}>Архив проектов</span>
                    </ProjectLink>
                </li>
            </ul>
        </aside>
    );
};

export default DashboardMenu;
