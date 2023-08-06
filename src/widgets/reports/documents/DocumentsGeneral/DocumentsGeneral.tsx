import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import CommonDocuments from "@/src/widgets/reports/documents/CommonDocuments";
import styles from "./DocumentsGeneral.module.scss";
import AgentReport from "@/src/features/reports/ui/AgentReport";
import NDFLReport from "@/src/features/reports/ui/NDFLReport";

const DocumentsGeneral = () => {
    return (
        <CommonBlock className={styles.documents_general}>
            <CommonDocuments />
            <AgentReport />
            <NDFLReport />
        </CommonBlock>
    );
};

export default DocumentsGeneral;
