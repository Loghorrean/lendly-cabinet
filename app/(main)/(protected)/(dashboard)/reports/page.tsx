import styles from "./styles.module.scss";
import DocumentsGeneral from "@/src/widgets/reports/documents/DocumentsGeneral";
import InvestmentDocumentsList from "@/src/widgets/reports/documents/InvestmentsDocumentsList";

export default function Reports() {
    return (
        <div className={styles.reports}>
            <DocumentsGeneral />
            <InvestmentDocumentsList />
        </div>
    );
}
