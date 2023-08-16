"use client";

import styles from "./PrimaryMarketMain.module.scss";
import PrimaryMarketFilter from "@/src/features/primary-market/ui/PrimaryMarketFilter";
import { useSortingDirection } from "@/src/shared/models/enums";
import Pagination from "@/src/shared/ui/pagination/ui/Pagination";
import CommonTable from "@/src/shared/ui/blocks/CommonTable";
import SortingDirectionBlock from "@/src/shared/ui/utils/SortingDirectionBlock";
import PaginationContent from "../../../../shared/ui/pagination/ui/composables/PaginationContent";
import PrimaryMarketOffer from "@/src/entities/primary-market/ui/PrimaryMarketOffer";
import DynamicPaginator from "@/src/shared/ui/pagination/ui/DynamicPaginator";
import LoadMoreButton from "@/src/shared/ui/buttons/LoadMoreButton";
import { usePagination } from "@/src/shared/ui/pagination/utils/usePagination";
import { useMemo, useState } from "react";
import { isNotEmpty, usePaginationFilter } from "@/src/shared/utils";
import { useGetFundraisingProjectsList } from "@/src/entities/project/hooks";
import { FundraisingProjectsFilter } from "@/src/entities/project/model/filter";
import { ENTITY_VISIBILITY, EntityVisibility } from "@/src/entities/visibility/model";

const PrimaryMarketMain = () => {
    const { page, perPage } = usePagination();
    const [filter, setFilter] = usePaginationFilter<FundraisingProjectsFilter>();
    console.log(filter);
    const [visibility, setVisibility] = useState<EntityVisibility>(ENTITY_VISIBILITY.ROWS);
    const projectsList = useGetFundraisingProjectsList({ filter, page, perPage });
    const [profitSorting, toggleProfitSorting] = useSortingDirection();
    const [termSorting, toggleTermSorting] = useSortingDirection();
    const renderProjects = useMemo(() => {
        if (isNotEmpty(projectsList.data)) {
            return projectsList.data.items.map(item => {
                return <PrimaryMarketOffer project={item} key={item.uuid} />;
            });
        }
    }, [projectsList.data]);
    return (
        <div className={styles.primary_market_main}>
            <PrimaryMarketFilter
                filter={filter}
                setFilter={setFilter}
                visibility={visibility}
                setVisibility={setVisibility}
            />
            <Pagination
                loading={projectsList.isLoading}
                totalCount={projectsList.data?.totalCount ?? 0}
                collection={projectsList.data}
            >
                <CommonTable>
                    <CommonTable.Header className={styles.primary_market_main__header}>
                        <div>Название предложения</div>
                        <div onClick={toggleProfitSorting} className={styles.primary_market_main__sorting}>
                            <span>Доход,%</span>
                            <SortingDirectionBlock direction={profitSorting} />
                        </div>
                        <div onClick={toggleTermSorting} className={styles.primary_market_main__sorting}>
                            <span>Срок</span>
                            <SortingDirectionBlock direction={termSorting} />
                        </div>
                        <div className={styles.primary_market_main__money}>
                            <span>Цель</span>
                            <span>Набрано</span>
                        </div>
                    </CommonTable.Header>
                    <PaginationContent>
                        <ul>{renderProjects}</ul>
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
