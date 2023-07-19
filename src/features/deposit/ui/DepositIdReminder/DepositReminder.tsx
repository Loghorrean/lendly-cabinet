import styles from "./DepositReminder.module.scss";
import CommonNotification from "@/src/entities/notification/ui/CommonNotification";
import InfoIcon from "@/src/shared/ui/svg/common/InfoIcon";
import ExternalLink from "@/src/shared/ui/links/ExternalLink";
import { COMMON_NOTIFICATION_TYPE } from "@/src/entities/notification/model";

const DepositReminder = () => {
    return (
        <CommonNotification
            notificationKey="deposit"
            config={{ session: true }}
            type={COMMON_NOTIFICATION_TYPE.ABSOLUTE}
        >
            <div className={styles.deposit_reminder}>
                <InfoIcon />
                <div className={styles.deposit_reminder__text}>
                    <p className={styles.deposit_reminder__text_block}>Вам присвоен ID 221705</p>
                    <p className={styles.deposit_reminder__text_block}>
                        <span>
                            После зачисления денежных средств на номинальный счёт, Вам будет доступен полный функционал
                        </span>
                        <span>платформы и Вы сможете осуществлять инвестирование.</span>
                    </p>
                    <p className={styles.deposit_reminder__text_block}>
                        <span>Осуществляя платёж на номинальный счёт Вы подтверждаете заключение</span>
                        <span>
                            <ExternalLink className={styles.deposit_reminder__link}>
                                договора по содействию в инвестировании
                            </ExternalLink>{" "}
                            и <ExternalLink className={styles.deposit_reminder__link}>агентского договора</ExternalLink>
                        </span>
                    </p>
                </div>
            </div>
        </CommonNotification>
    );
};

export default DepositReminder;
