import { Button } from "@/src/shared/ui/buttons";
import styles from "./CommonNotificationClose.module.scss";
import CloseIcon from "@/src/shared/ui/svg/actions/CloseIcon";
import { cn, resultIf } from "@/src/shared/utils";
import { COMMON_NOTIFICATION_TYPE, CommonNotificationType } from "@/src/entities/notification/model";

type Props = {
    close: () => void;
    type: CommonNotificationType;
};

const CommonNotificationClose = ({ type, close }: Props) => {
    return (
        <Button
            className={cn(
                styles.common_notification_close,
                resultIf(type === COMMON_NOTIFICATION_TYPE.ABSOLUTE, styles.common_notification_close__absolute)
            )}
            onClick={close}
        >
            <CloseIcon />
        </Button>
    );
};

export default CommonNotificationClose;
