import styles from "./ProfileBlock.module.scss";
import IdentificationReminder from "@/src/features/profile/ui/IdentificationReminder";

const ProfileBlock = () => {
    return (
        <div className={styles.profile_block}>
            <IdentificationReminder />
        </div>
    );
};

export default ProfileBlock;
