"use client";

import styles from "./ProfileBlock.module.scss";
import IdentificationReminder from "@/src/features/profile/ui/IdentificationReminder";
import ProfileGeneral from "@/src/widgets/profile/ProfileGeneral";
import { useCurrentProfile } from "@/src/entities/profile/hooks";

const ProfileBlock = () => {
    const profile = useCurrentProfile();
    return (
        <div className={styles.profile_block}>
            {!profile.lender?.verified && <IdentificationReminder />}
            <ProfileGeneral />
        </div>
    );
};

export default ProfileBlock;
