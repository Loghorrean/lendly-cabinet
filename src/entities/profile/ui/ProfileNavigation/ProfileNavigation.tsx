import styles from "./ProfileNavigation.module.scss";
import { ProjectLink } from "@/src/shared/ui/links";

const ProfileNavigation = () => {
    return (
        <aside className={styles.profile_aside}>
            <nav className={styles.profile_aside__navigation}>
                <ul className={styles.profile_aside__list}>
                    <li className={styles.profile_aside__element}>
                        <ProjectLink href="/profile" className={styles.profile_aside__link}>
                            Профиль
                        </ProjectLink>
                    </li>
                    <li className={styles.profile_aside__element}>
                        <ProjectLink href="/profile/identification" className={styles.profile_aside__link}>
                            Верификация
                        </ProjectLink>
                    </li>
                    <li className={styles.profile_aside__element}>
                        <ProjectLink href="/profile/qualified" className={styles.profile_aside__link}>
                            Квалифицированный инвестор
                        </ProjectLink>
                    </li>
                    <li className={styles.profile_aside__element}>
                        <ProjectLink href="/profile/my-documents" className={styles.profile_aside__link}>
                            Мои документы
                        </ProjectLink>
                    </li>
                </ul>
            </nav>
            <ProjectLink href="/profile/change-passport" className={styles.profile_aside__passport}>
                Нажмите в случае смены паспорта
            </ProjectLink>
        </aside>
    );
};

export default ProfileNavigation;
