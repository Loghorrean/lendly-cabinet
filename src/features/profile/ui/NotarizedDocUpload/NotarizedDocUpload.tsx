import styles from "./NotarizedDocUpload.module.scss";
import PrivateFileUpload from "@/src/entities/file/ui/PrivateFileUpload";
import { useState } from "react";
import { useActionMessages } from "@/src/shared/action-messages/store";
import { ACTION_MESSAGE_TYPE } from "@/src/shared/action-messages/model/ActionMessage";
import PdfIcon from "@/src/entities/file/ui/PdfIcon";
import Loader from "@/src/shared/ui/loaders/Loader";
import { cn, resultIf } from "@/src/shared/utils";

const NotarizedDocUpload = () => {
    const { addMessage } = useActionMessages();
    const [loading, setLoading] = useState(false);
    //TODO: ADD NORMAL ERROR HANDLING
    const handleError = () => {
        addMessage(ACTION_MESSAGE_TYPE.ERROR, "не удалось загрузить доверенность");
    };
    //TODO: ADD NORMAL PROPS
    return (
        <PrivateFileUpload
            onLoading={setLoading}
            onError={handleError}
            onUploaded={() => {
                return "";
            }}
        >
            <div className={cn(styles.notarized_doc_upload, resultIf(loading, styles.notarized_doc_upload___loading))}>
                {loading ? (
                    <Loader dark />
                ) : (
                    <>
                        <PdfIcon />
                        <p className={styles.notarized_doc_upload__heading}>Добавьте нотариальную доверенность</p>
                        <p className={styles.notarized_doc_upload__types}>
                            jpg, png, jpeg, gif, pdf, tiff, doc, docx, максимум 10Мб
                        </p>
                    </>
                )}
            </div>
        </PrivateFileUpload>
    );
};

export default NotarizedDocUpload;
