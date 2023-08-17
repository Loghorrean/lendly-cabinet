"use client";

import styles from "./SecondaryMarketMain.module.scss";
import { isNotEmpty, RequiredWith, usePaginationFilter } from "@/src/shared/utils";
import Pagination, { PaginationConfig } from "@/src/shared/ui/pagination/ui/Pagination/Pagination";
import { usePagination } from "@/src/shared/ui/pagination/utils/usePagination";
import { OfferListFilter } from "@/src/entities/offer/model";
import { useMemo, useState } from "react";
import { ENTITY_VISIBILITY, EntityVisibility } from "@/src/entities/visibility/model";
import { useGetOffersList } from "@/src/entities/offer/hooks";
import { useSortingDirection } from "@/src/shared/models/enums";
import OffersListFilter from "@/src/features/offer/ui/OffersListFilter";
import CommonTable from "@/src/shared/ui/blocks/CommonTable";
import SortingDirectionBlock from "@/src/shared/ui/utils/SortingDirectionBlock";
import SecondaryMarketOffer from "@/src/entities/offer/ui/SecondaryMarketOffer";
import SecondaryMarketCard from "@/src/entities/offer/ui/SecondaryMarketCard";
import PaginationContent from "@/src/shared/ui/pagination/ui/composables/PaginationContent";

const paginationConfig: RequiredWith<PaginationConfig, "defaultPerPage" | "firstPage"> = {
    defaultPerPage: 6,
    firstPage: 1,
};

const SecondaryMarketMain = () => {
    const { page, perPage } = usePagination(paginationConfig);
    const [filter, setFilter] = usePaginationFilter<OfferListFilter>();
    const [visibility, setVisibility] = useState<EntityVisibility>(ENTITY_VISIBILITY.ROWS);
    const offersList = useGetOffersList({ filter, page, perPage });
    const [amountSorting, toggleAmountSorting] = useSortingDirection();
    const [profitSorting, toggleProfitSorting] = useSortingDirection();
    const renderOffers = useMemo(() => {
        if (isNotEmpty(offersList.data)) {
            return offersList.data.items.map(offer => {
                return visibility === ENTITY_VISIBILITY.ROWS ? (
                    <SecondaryMarketOffer offer={offer} key={offer.uuid} />
                ) : (
                    <SecondaryMarketCard offer={offer} key={offer.uuid} />
                );
            });
        }
    }, [offersList.data, visibility]);
    return (
        <div className={styles.secondary_market_main}>
            <OffersListFilter
                filter={filter}
                setFilter={setFilter}
                visibility={visibility}
                setVisibility={setVisibility}
            />
            <Pagination
                loading={offersList.isLoading}
                totalCount={offersList.data?.totalCount ?? 0}
                collection={offersList.data}
                config={paginationConfig}
            >
                {visibility === ENTITY_VISIBILITY.ROWS ? (
                    <CommonTable>
                        <CommonTable.Header className={styles.secondary_market_main__header}>
                            <div>Название предложения</div>
                            <div>Размер предложения</div>
                            <div onClick={toggleAmountSorting} className={styles.secondary_market_main__sorting}>
                                <span>Цена</span>
                                <SortingDirectionBlock direction={amountSorting} />
                            </div>
                            <div>Срок</div>
                            <div onClick={toggleProfitSorting} className={styles.secondary_market_main__sorting}>
                                <span>Доходность</span>
                                <SortingDirectionBlock direction={profitSorting} />
                            </div>
                            <div></div>
                        </CommonTable.Header>
                        <PaginationContent>
                            <ul>{renderOffers}</ul>
                        </PaginationContent>
                    </CommonTable>
                ) : (
                    <ul className={styles.secondary_market_main__cards}>{renderOffers}</ul>
                )}
            </Pagination>
        </div>
    );
};

export default SecondaryMarketMain;
