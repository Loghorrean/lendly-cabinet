import styles from "./RegisterReminder.module.scss";
import CommonNotification from "@/src/entities/notification/ui/CommonNotification";
import UnlockIcon from "@/src/shared/ui/svg/common/UnlockIcon";
import { ProjectLink } from "@/src/shared/ui/links";
import { COMMON_NOTIFICATION_TYPE } from "@/src/entities/notification/model";

const RegisterReminder = () => {
    return (
        <CommonNotification
            notificationKey="register"
            type={COMMON_NOTIFICATION_TYPE.LINEAR}
            config={{ session: true }}
        >
            <div className={styles.register_reminder}>
                <UnlockIcon />
                <span className={styles.register_reminder__text}>
                    Необходимо{" "}
                    <ProjectLink href="/auth/register" className={styles.register_reminder__link}>
                        пройти регистрацию
                    </ProjectLink>
                    , чтобы получить доступ к инвестированию
                </span>
            </div>
        </CommonNotification>
    );
};

export default RegisterReminder;
