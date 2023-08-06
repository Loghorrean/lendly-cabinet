import styles from "./styles.module.scss";
import ExternalTransactionsBlock from "@/src/widgets/reports/transactions/ExternalTransactionsBlock";

export default function TransactionsReports() {
    return (
        <div className={styles.transactions_reports}>
            <ExternalTransactionsBlock />
        </div>
    );
}
