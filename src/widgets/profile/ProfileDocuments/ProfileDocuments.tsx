import styles from "./ProfileDocuments.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import CommonDocument from "@/src/shared/ui/blocks/CommonDocument";

const ProfileDocuments = () => {
    return (
        <div className={styles.profile_documents}>
            <Heading headingType={HEADING_TYPE.H2} className={styles.profile_documents__heading}>
                Мои документы
            </Heading>
            <div className={styles.profile_documents__grid}>
                <CommonDocument link="https://youtube.com">Устав организации от 12.05.2022 г.</CommonDocument>
                <CommonDocument link="https://youtube.com">Устав организации от 12.05.2022 г.</CommonDocument>
                <CommonDocument link="https://youtube.com">Устав организации от 12.05.2022 г.</CommonDocument>
                <CommonDocument link="https://youtube.com">Устав организации от 12.05.2022 г.</CommonDocument>
                <CommonDocument link="https://youtube.com">Устав организации от 12.05.2022 г.</CommonDocument>
                <CommonDocument link="https://youtube.com">Устав организации от 12.05.2022 г.</CommonDocument>
                <CommonDocument link="https://youtube.com">Устав организации от 12.05.2022 г.</CommonDocument>
                <CommonDocument link="https://youtube.com">Устав организации от 12.05.2022 г.</CommonDocument>
                <CommonDocument link="https://youtube.com">Устав организации от 12.05.2022 г.</CommonDocument>
            </div>
        </div>
    );
};

export default ProfileDocuments;
