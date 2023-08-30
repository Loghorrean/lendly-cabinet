"use client";

import styles from "./MyFundraisingInvestmentsList.module.scss";
import SearchInput from "@/src/shared/ui/inputs/SearchInput";
import { useMemo, useState } from "react";
import Pagination from "@/src/shared/ui/pagination/ui/Pagination";
import { DataCollection } from "@/src/shared/models/common";
import CommonTable from "@/src/shared/ui/blocks/CommonTable";
import SortingDirectionBlock from "@/src/shared/ui/utils/SortingDirectionBlock";
import { useSortingDirection } from "@/src/shared/models/enums";
import PaginationContent from "@/src/shared/ui/pagination/ui/composables/PaginationContent";
import MyFundraisingInvestment from "@/src/entities/my-investments/ui/MyFundraisingInvestment";
import LoadMoreButton from "@/src/shared/ui/buttons/LoadMoreButton";
import DynamicPaginator from "@/src/shared/ui/pagination/ui/DynamicPaginator";
import { usePagination } from "@/src/shared/ui/pagination/utils";
import { useGetMyFundraisingInvestmentsList } from "@/src/entities/my-investments/hooks";
import { isValueEmpty } from "@/src/shared/utils";

const MyFundraisingInvestmentsList = () => {
    const { page, perPage } = usePagination();
    const { data, isLoading } = useGetMyFundraisingInvestmentsList({
        page,
        perPage,
    });
    const [termSorting, toggleTermSorting] = useSortingDirection();
    const [profitSorting, toggleProfitSorting] = useSortingDirection();
    const [search, setSearch] = useState("");

    const renderInvestments = useMemo(() => {
        if (isValueEmpty(data)) {
            return <div>Инвестиции не найдены</div>;
        }
        return (
            <ul>
                {data.items.map(item => {
                    return <MyFundraisingInvestment investment={item} key={item.project.uuid} />;
                })}
            </ul>
        );
    }, [data]);

    return (
        <div className={styles.my_fundraising_investments}>
            <SearchInput
                value={search}
                onChange={setSearch}
                id="search"
                inputProps={{ placeholder: "Искать по номеру или названию" }}
            />
            <Pagination loading={isLoading} totalCount={data?.totalCount ?? 0} collection={data}>
                <CommonTable>
                    <CommonTable.Header className={styles.my_fundraising_investments__header}>
                        <div>Компания</div>
                        <div>Размер участия</div>
                        <div>Дата инвестиции</div>
                        <div>Срок</div>
                        <div onClick={toggleTermSorting} className={styles.my_fundraising_investments__sorting}>
                            <span>Осталось</span>
                            <SortingDirectionBlock direction={termSorting} />
                        </div>
                        <div onClick={toggleProfitSorting} className={styles.my_fundraising_investments__sorting}>
                            <span>Доход,%</span>
                            <SortingDirectionBlock direction={profitSorting} />
                        </div>
                    </CommonTable.Header>
                    <PaginationContent>{renderInvestments}</PaginationContent>
                </CommonTable>
                <Pagination.Footer>
                    <LoadMoreButton loading={isLoading} />
                    <DynamicPaginator />
                </Pagination.Footer>
            </Pagination>
        </div>
    );
};

export default MyFundraisingInvestmentsList;
