import styles from "./CommonDocuments.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import CommonDocument from "@/src/shared/ui/blocks/CommonDocument";

const CommonDocuments = () => {
    return (
        <div className={styles.common_documents}>
            <Heading headingType={HEADING_TYPE.H3} className={styles.common_documents__heading}>
                Общие документы
            </Heading>
            <div className={styles.common_documents__list}>
                <CommonDocument link="https://youtube.com">Правила пользования</CommonDocument>
                <CommonDocument link="https://youtube.com">
                    Условия договора по содействию в инвестиирование
                </CommonDocument>
            </div>
        </div>
    );
};

export default CommonDocuments;
