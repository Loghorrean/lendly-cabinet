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
import { useGetTransactionsList } from "@/src/entities/transaction/hooks";
import { usePagination } from "@/src/shared/ui/pagination/utils/usePagination";
import { isNotEmpty, usePaginationFilter } from "@/src/shared/utils";
import { TransactionListFilter } from "@/src/entities/transaction/model/filter";
import { useMemo } from "react";
import PaginationContent from "@/src/shared/ui/pagination/ui/composables/PaginationContent";

const TransactionsList = () => {
    const { page, perPage } = usePagination();
    const [filter, setFilter] = usePaginationFilter<TransactionListFilter>();
    const getTransactions = useGetTransactionsList({ page, perPage, filter });
    const [sumSorting, toggleSumSorting] = useSortingDirection();
    const renderTransactions = useMemo(() => {
        if (isNotEmpty(getTransactions.data)) {
            return getTransactions.data.items.map(item => {
                return (
                    <TransactionElement key={item.uuid}>
                        <CancelTransactionButton />
                    </TransactionElement>
                );
            });
        }
    }, [getTransactions.data]);
    return (
        <Pagination
            loading={getTransactions.isLoading}
            totalCount={getTransactions.data?.totalCount ?? 0}
            collection={getTransactions.data}
        >
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
                <PaginationContent>
                    <ul>{renderTransactions}</ul>
                </PaginationContent>
            </CommonTable>
            <Pagination.Footer>
                <LoadMoreButton loading={false} />
                <DynamicPaginator />
            </Pagination.Footer>
        </Pagination>
    );
};

export default TransactionsList;
