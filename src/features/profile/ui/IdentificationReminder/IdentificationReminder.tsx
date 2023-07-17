import { COMMON_NOTIFICATION_TYPE } from "@/src/entities/notification/model";
import UnlockIcon from "@/src/shared/ui/svg/common/UnlockIcon";
import { ProjectLink } from "@/src/shared/ui/links";
import CommonNotification from "@/src/entities/notification/ui/CommonNotification";
import styles from "./IdentificationReminder.module.scss";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";

const IdentificationReminder = () => {
    return (
        <CommonNotification
            notificationKey="identification"
            type={COMMON_NOTIFICATION_TYPE.ABSOLUTE}
            config={{ session: true }}
        >
            <div className={styles.identification_reminder}>
                <header className={styles.identification_reminder__header}>
                    <UnlockIcon />
                    <span className={styles.identification_reminder__text}>
                        Необходимо заполнить анкету, чтобы получить доступ к инвестированию
                    </span>
                </header>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN}>
                    <ProjectLink href="/profile/identification" className={styles.identification_reminder__submit}>
                        Заполнить
                    </ProjectLink>
                </PrimaryButton>
            </div>
        </CommonNotification>
    );
};

export default IdentificationReminder;
