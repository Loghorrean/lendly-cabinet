"use client";

import { ClientNotificationConfig, cn, useOneTimeClientNotification } from "@/src/shared/utils";
import styles from "./CommonNotification.module.scss";
import { PropsWithChildren } from "react";
import CommonNotificationClose from "@/src/entities/notification/ui/CommonNotification/composables/CommonNotificationClose";
import { COMMON_NOTIFICATION_TYPE, CommonNotificationType } from "@/src/entities/notification/model";

type Props = {
    notificationKey: string;
    type?: CommonNotificationType;
    config: ClientNotificationConfig;
};

const typesMap = {
    [COMMON_NOTIFICATION_TYPE.LINEAR]: styles.common_notification___linear,
    [COMMON_NOTIFICATION_TYPE.ABSOLUTE]: styles.common_notification___absolute,
} satisfies Record<CommonNotificationType, string>;

const CommonNotification = ({
    notificationKey,
    type = COMMON_NOTIFICATION_TYPE.ABSOLUTE,
    config,
    children,
}: PropsWithChildren<Props>) => {
    const [isVisible, close] = useOneTimeClientNotification(notificationKey, config);
    return (
        <>
            {isVisible && (
                <div className={cn(styles.common_notification, typesMap[type])}>
                    {children}
                    <CommonNotification.Close close={close} type={type} />
                </div>
            )}
        </>
    );
};

CommonNotification.Close = CommonNotificationClose;

export default CommonNotification;
