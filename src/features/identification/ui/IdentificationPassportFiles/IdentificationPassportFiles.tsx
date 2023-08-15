import styles from "./IdentificationPassportFiles.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import CommonFileUpload from "@/src/entities/file/ui/CommonFileUpload";
import { ACTION_MESSAGE_TYPE } from "@/src/shared/action-messages/model/ActionMessage";
import { useActionMessages } from "@/src/shared/action-messages/store";

type Props = {
    firstPage?: string;
    setFirstPage: (firstPage: string) => void;
    secondPage?: string;
    setSecondPage: (secondPage: string) => void;
};

const IdentificationPassportFiles = ({ firstPage, setFirstPage, secondPage, setSecondPage }: Props) => {
    const { addMessage } = useActionMessages();
    return (
        <div className={styles.identification_passport_files}>
            <Heading headingType={HEADING_TYPE.H2} className={styles.identification_passport_files__heading}>
                Загрузите скан паспорта
            </Heading>
            <div className={styles.identification_passport_files__inputs}>
                <CommonFileUpload
                    onError={() => addMessage(ACTION_MESSAGE_TYPE.ERROR, "Не удалось загрузить разворот с фотографией")}
                    onUploaded={data => {
                        setFirstPage(data[0].url);
                    }}
                    placeholder="Первый разворот с фотографией"
                    fileUrl={firstPage}
                />
                <CommonFileUpload
                    onError={() => addMessage(ACTION_MESSAGE_TYPE.ERROR, "Не удалось загрузить разворот с пропиской")}
                    onUploaded={data => {
                        setSecondPage(data[0].url);
                    }}
                    placeholder="Второй разворот с пропиской"
                    fileUrl={secondPage}
                />
            </div>
        </div>
    );
};

export default IdentificationPassportFiles;
