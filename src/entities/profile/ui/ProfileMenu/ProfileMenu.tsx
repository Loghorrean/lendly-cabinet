import styles from "./ProfileMenu.module.scss";
import { useCurrentProfile } from "@/src/entities/profile/hooks";
import UserArrowDown from "@/src/shared/ui/svg/arrows/UserArrowDown";

const ProfileMenu = () => {
    const profile = useCurrentProfile();
    const initials = () => {
        const nameWords = profile.name.split(" ");
        return nameWords
            .map(word => word[0].toUpperCase())
            .join("")
            .slice(0, -1);
    };
    return (
        <div className={styles.profile_menu}>
            <div className={styles.profile_menu__user}>{initials()}</div>
            <UserArrowDown />
        </div>
    );
};

export default ProfileMenu;
