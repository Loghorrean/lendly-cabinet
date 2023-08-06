import styles from "./styles.module.scss";
import ExternalTransactionsBlock from "@/src/widgets/reports/transactions/ExternalTransactionsBlock";
import AllTransactions from "@/src/widgets/reports/transactions/AllTransactions";

export default function TransactionsReports() {
    return (
        <div className={styles.transactions_reports}>
            <ExternalTransactionsBlock />
            <AllTransactions />
        </div>
    );
}
