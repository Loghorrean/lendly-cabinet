import styles from "./ProfileCommonBlock.module.scss";
import { PropsWithChildren } from "react";

const ProfileCommonBlock = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.profile_common_block}>
            <div className={styles.profile_common_block__container}>{children}</div>
        </div>
    );
};

export default ProfileCommonBlock;
