import styles from "./TransactionElement.module.scss";
import CommonTable from "@/src/shared/ui/blocks/CommonTable";
import { cn, formatTime, formatDate } from "@/src/shared/utils";
import { PropsWithChildren } from "react";
import { Money } from "@/src/shared/ui/utils";
import { MONEY_MODE } from "@/src/shared/ui/utils/Money/Money";

const TransactionElement = ({ children }: PropsWithChildren) => {
    return (
        <CommonTable.Row className={styles.transaction_element}>
            <CommonTable.Cell
                className={cn(cn(styles.transaction_element__cell, styles.transaction_element__date_time))}
            >
                <div className={styles.transaction_element__time}>{formatTime(new Date())}</div>
                <div className={styles.transaction_element__date}>{formatDate(new Date())}</div>
            </CommonTable.Cell>
            <CommonTable.Cell className={cn(styles.transaction_element__cell, styles.transaction_element__company)}>
                <div className={styles.transaction_element__company_top}>
                    <div className={styles.transaction_element__type}>Заем</div>
                    <div className={styles.transaction_element__id}>ID 332932-7666</div>
                </div>
                <div className={styles.transaction_element__name}>ООО Эстетик Вижен Плюс</div>
            </CommonTable.Cell>
            <CommonTable.Cell className={cn(styles.transaction_element__cell, styles.transaction_element__amount)}>
                <Money
                    money={{ amount: 1080090000, currencyCode: "RUB" }}
                    moneyMode={MONEY_MODE.INCOMING}
                    withCurrency={false}
                />
            </CommonTable.Cell>
            <CommonTable.Cell className={cn(styles.transaction_element__cell, styles.transaction_element__purpose)}>
                Комиссия за покупку инвестиции
            </CommonTable.Cell>
            <CommonTable.Cell className={styles.transaction_element__cell}>
                <div className={cn(styles.transaction_element__status, styles.transaction_element__status___success)}>
                    Выполнена
                </div>
            </CommonTable.Cell>
            <CommonTable.Cell className={styles.transaction_element__cell}>{children}</CommonTable.Cell>
        </CommonTable.Row>
    );
};

export default TransactionElement;
