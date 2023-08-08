import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";
import styles from "./SendChangePasswordRequestButton.module.scss";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { useSendChangePasswordRequestMutation } from "@/src/entities/profile/hooks";
import { useActionMessages } from "@/src/shared/action-messages/store";
import { useEffectOnUpdate } from "@/src/shared/utils";
import { ACTION_MESSAGE_TYPE } from "@/src/shared/action-messages/model/ActionMessage";
import Loader from "@/src/shared/ui/loaders/Loader";

type Props = {
    onRequested: () => void;
    onSent: () => void;
};

const SendChangePasswordRequestButton = ({ onRequested, onSent }: Props) => {
    const { addMessage } = useActionMessages();
    const sendRequest = useSendChangePasswordRequestMutation();
    const handleClick = async () => {
        onRequested();
        await sendRequest.mutate(undefined, {
            onSuccess: () => {
                onSent();
                addMessage(ACTION_MESSAGE_TYPE.SUCCESS, "Запрос отправлен");
            },
        });
    };

    useEffectOnUpdate(() => {
        if (sendRequest.isError) {
            addMessage(ACTION_MESSAGE_TYPE.ERROR, "Не удалось отправить запрос");
        }
    }, [sendRequest.isError]);

    return (
        <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
            <Button className={styles.send_change_password_request_button} onClick={handleClick}>
                {sendRequest.isLoading ? <Loader dark /> : "Изменить"}
            </Button>
        </PrimaryButton>
    );
};

export default SendChangePasswordRequestButton;
