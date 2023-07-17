import styles from "./ProfileNavigation.module.scss";
import { ProjectLink } from "@/src/shared/ui/links";
import { Button } from "@/src/shared/ui/buttons";

const ProfileNavigation = () => {
    return (
        <aside className={styles.profile_navigation}>
            <nav>
                <ul className={styles.profile_navigation__list}>
                    <li className={styles.profile_navigation__element}>
                        <ProjectLink href="/profile" className={styles.profile_navigation__link}>
                            Профиль
                        </ProjectLink>
                    </li>
                    <li className={styles.profile_navigation__element}>
                        <ProjectLink href="/profile/identification" className={styles.profile_navigation__link}>
                            Верификация
                        </ProjectLink>
                    </li>
                    <li className={styles.profile_navigation__element}>
                        <ProjectLink href="/profile/my-documents" className={styles.profile_navigation__link}>
                            Мои документы
                        </ProjectLink>
                    </li>
                    <li className={styles.profile_navigation__element}>
                        <ProjectLink href="/profile/notifications" className={styles.profile_navigation__link}>
                            Уведомления
                        </ProjectLink>
                    </li>
                </ul>
            </nav>
            <ProjectLink href="/profile/change-passport" className={styles.profile_navigation__passport}>
                Нажмите в случае смены паспорта
            </ProjectLink>
        </aside>
    );
};

export default ProfileNavigation;
