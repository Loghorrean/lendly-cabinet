"use client";

import styles from "./PrimaryMarketMain.module.scss";
import PrimaryMarketFilter from "@/src/features/primary-market/ui/PrimaryMarketFilter";
import { useSortingDirection } from "@/src/shared/models/enums";
import Pagination from "@/src/shared/ui/pagination/ui/Pagination";
import { Collection } from "@/src/shared/models/common/Collection";
import CommonTable from "@/src/shared/ui/blocks/CommonTable";
import SortingDirectionBlock from "@/src/shared/ui/utils/SortingDirectionBlock";
import PaginationContent from "../../../../shared/ui/pagination/ui/composables/PaginationContent";
import PrimaryMarketOffer from "@/src/entities/primary-market/ui/PrimaryMarketOffer";
import DynamicPaginator from "@/src/shared/ui/pagination/ui/DynamicPaginator";
import LoadMoreButton from "@/src/shared/ui/buttons/LoadMoreButton";

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

const PrimaryMarketMain = () => {
    const [profitSorting, toggleProfitSorting] = useSortingDirection();
    const [termSorting, toggleTermSorting] = useSortingDirection();
    return (
        <div className={styles.primary_market_main}>
            <PrimaryMarketFilter />
            <Pagination loading={false} totalCount={mockCollection.totalCount} collection={mockCollection}>
                <CommonTable>
                    <CommonTable.Header className={styles.primary_market_main__header}>
                        <div>Название предложения</div>
                        <div onClick={toggleProfitSorting}>
                            <span>Доход,%</span>
                            <SortingDirectionBlock direction={profitSorting} />
                        </div>
                        <div onClick={toggleTermSorting}>
                            <span>Срок</span>
                            <SortingDirectionBlock direction={termSorting} />
                        </div>
                        <div className={styles.primary_market_main__money}>
                            <span>Цель</span>
                            <span>Набрано</span>
                        </div>
                    </CommonTable.Header>
                    <PaginationContent>
                        <ul>
                            <PrimaryMarketOffer />
                            <PrimaryMarketOffer />
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

export default PrimaryMarketMain;
