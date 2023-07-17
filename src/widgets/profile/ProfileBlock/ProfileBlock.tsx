import styles from "./ProfileBlock.module.scss";
import IdentificationReminder from "@/src/features/profile/ui/IdentificationReminder";
import ProfileGeneral from "@/src/widgets/profile/ProfileGeneral";

const ProfileBlock = () => {
    return (
        <div className={styles.profile_block}>
            <IdentificationReminder />
            <ProfileGeneral />
        </div>
    );
};

export default ProfileBlock;
