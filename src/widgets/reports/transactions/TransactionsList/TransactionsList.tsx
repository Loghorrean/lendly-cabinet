"use client";

import CommonTable from "@/src/shared/ui/blocks/CommonTable";
import styles from "./TransactionsList.module.scss";
import SortingDirectionBlock from "@/src/shared/ui/utils/SortingDirectionBlock";
import { useSortingDirection } from "@/src/shared/models/enums";
import TransactionElement from "@/src/entities/transaction/ui/TransactionElement";
import LoadMoreButton from "@/src/shared/ui/buttons/LoadMoreButton";
import DynamicPaginator from "@/src/shared/ui/pagination/ui/DynamicPaginator";
import Pagination from "@/src/shared/ui/pagination/ui/Pagination";
import CancelTransactionButton from "@/src/features/transactions/ui/CancelTransactionButton";

const TransactionsList = () => {
    const [sumSorting, toggleSumSorting] = useSortingDirection();
    return (
        <Pagination loading={false} totalCount={25}>
            <CommonTable className={styles.transactions_list}>
                <CommonTable.Header className={styles.transactions_list__header}>
                    <div>Дата, время</div>
                    <div>Компания</div>
                    <div onClick={toggleSumSorting} className={styles.transactions_list__sorting}>
                        <span>Осталось</span>
                        <SortingDirectionBlock direction={sumSorting} />
                    </div>
                    <div>Назначение платежа</div>
                    <div>Статус</div>
                    <div></div>
                </CommonTable.Header>
                <ul>
                    <TransactionElement>
                        <CancelTransactionButton />
                    </TransactionElement>
                </ul>
            </CommonTable>
            <Pagination.Footer>
                <LoadMoreButton loading={false} />
                <DynamicPaginator />
            </Pagination.Footer>
        </Pagination>
    );
};

export default TransactionsList;
