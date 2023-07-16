"use client";

import styles from "./MyFundraisingInvestmentsList.module.scss";
import SearchInput from "@/src/shared/ui/inputs/SearchInput";
import { useState } from "react";
import { useEffectOnUpdate } from "@/src/shared/utils";
import Pagination from "@/src/shared/ui/pagination/ui/Pagination";
import { Collection } from "@/src/shared/models/common";
import CommonTable from "@/src/shared/ui/blocks/CommonTable";
import SortingDirectionBlock from "@/src/shared/ui/utils/SortingDirectionBlock";
import { useSortingDirection } from "@/src/shared/models/enums";
import PaginationContent from "@/src/shared/ui/pagination/ui/composables/PaginationContent";
import MyFundraisingInvestment from "@/src/entities/my-investments/ui/MyFundraisingInvestment";
import LoadMoreButton from "@/src/shared/ui/buttons/LoadMoreButton";
import DynamicPaginator from "@/src/shared/ui/pagination/ui/DynamicPaginator";

const mockCollection: Collection<{ id: number }> = {
    items: [
        {
            id: 1,
        },
        {
            id: 2,
        },
    ],
    totalCount: 3,
};

const MyFundraisingInvestmentsList = () => {
    const [termSorting, toggleTermSorting] = useSortingDirection();
    const [profitSorting, toggleProfitSorting] = useSortingDirection();
    const [search, setSearch] = useState("");
    useEffectOnUpdate(() => {
        console.log(search);
    }, [search]);
    return (
        <div className={styles.my_fundraising_investments}>
            <SearchInput
                value={search}
                onChange={setSearch}
                id="search"
                inputProps={{ placeholder: "Искать по номеру или названию" }}
            />
            <Pagination loading={false} totalCount={mockCollection.totalCount} collection={mockCollection}>
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
                    <PaginationContent>
                        <ul>
                            <MyFundraisingInvestment />
                            <MyFundraisingInvestment />
                        </ul>
                    </PaginationContent>
                </CommonTable>
                <Pagination.Footer>
                    <LoadMoreButton loading={false} />
                    <DynamicPaginator />
                </Pagination.Footer>
            </Pagination>
        </div>
    );
};

export default MyFundraisingInvestmentsList;
