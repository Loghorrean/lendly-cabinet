import styles from "./styles.module.scss";
import DocumentsGeneral from "@/src/widgets/reports/documents/DocumentsGeneral";
import InvestmentDocumentsList from "@/src/widgets/reports/documents/InvestmentsDocumentsList";

export default function DocumentsReports() {
    return (
        <div className={styles.documents_reports}>
            <DocumentsGeneral />
            <InvestmentDocumentsList />
        </div>
    );
}
