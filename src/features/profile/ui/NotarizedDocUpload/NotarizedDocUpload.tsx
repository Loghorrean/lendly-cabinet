import { useActionMessages } from "@/src/shared/action-messages/store";
import { ACTION_MESSAGE_TYPE } from "@/src/shared/action-messages/model/ActionMessage";
import CommonFileUpload from "@/src/entities/file/ui/CommonFileUpload";

const NotarizedDocUpload = () => {
    const { addMessage } = useActionMessages();
    //TODO: ADD NORMAL ERROR HANDLING
    const handleError = () => {
        addMessage(ACTION_MESSAGE_TYPE.ERROR, "Не удалось загрузить доверенность!");
    };
    //TODO: ADD NORMAL PROPS
    return (
        <CommonFileUpload
            onError={handleError}
            onUploaded={() => {
                return "";
            }}
        />
    );
};

export default NotarizedDocUpload;
