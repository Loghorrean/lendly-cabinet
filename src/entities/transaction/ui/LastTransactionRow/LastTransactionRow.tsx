import { PAYMENT_TYPE, ShortTransaction, translateTransactionType } from "@/src/entities/transaction/model";
import styles from "./LastTransactionRow.module.scss";
import { Money } from "@/src/shared/ui/utils";
import IncomeIcon from "@/src/shared/ui/svg/money/IncomeIcon";
import OutcomeIcon from "@/src/shared/ui/svg/money/OutcomeIcon";

type Props = {
    transaction: ShortTransaction;
};

const LastTransactionRow = ({ transaction }: Props) => {
    return (
        <li className={styles.last_transaction_row}>
            <div className={styles.last_transaction_row__type}>
                {translateTransactionType(transaction.transactionType)}
            </div>
            <div className={styles.last_transaction_row__money}>
                <Money money={transaction.money} />
                {transaction.paymentType === PAYMENT_TYPE.CREDIT ? <IncomeIcon /> : <OutcomeIcon />}
            </div>
        </li>
    );
};

export default LastTransactionRow;
