import styles from "./OffersListFilter.module.scss";
import { Dispatch, SetStateAction, useState } from "react";
import { EntityVisibility } from "@/src/entities/visibility/model";
import { OfferListFilter } from "@/src/entities/offer/model";
import { isNotEmpty, useDropdown, useToggle } from "@/src/shared/utils";
import { DropdownArrowButton } from "@/src/shared/ui/utils";
import VisibilitySelect from "@/src/entities/visibility/ui/VisibilitySelect";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import RangeSelect from "@/src/shared/ui/select/RangeSelect";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";

type Props = {
    filter: OfferListFilter;
    setFilter: Dispatch<SetStateAction<OfferListFilter>>;
    visibility: EntityVisibility;
    setVisibility: (visibility: EntityVisibility) => void;
};

const OffersListFilter = ({ filter, setFilter, visibility, setVisibility }: Props) => {
    const [active, toggle] = useToggle();
    const [ref, height] = useDropdown(active);
    const [profit, setProfit] = useState<Array<number>>(
        isNotEmpty(filter.interestRateFrom) || isNotEmpty(filter.interestRateTo)
            ? [filter.interestRateFrom ?? 0, filter.interestRateTo ?? 100]
            : [0, 100]
    );
    const [term, setTerm] = useState<Array<number>>(
        isNotEmpty(filter.initialTermFrom) || isNotEmpty(filter.initialTermTo)
            ? [filter.initialTermFrom ?? 0, filter.initialTermTo ?? 100]
            : [0, 100]
    );
    const [ltv, setLtv] = useState<Array<number>>(
        isNotEmpty(filter.ltvFrom) || isNotEmpty(filter.ltvTo) ? [filter.ltvFrom ?? 0, filter.ltvTo ?? 100] : [0, 100]
    );
    const handleClick = () => {
        setFilter(prev => {
            return {
                ...prev,
                interestRateFrom: profit[0],
                interestRateTo: profit[1],
                initialTermFrom: term[0],
                initialTermTo: term[1],
                ltvFrom: ltv[0],
                ltvTo: ltv[1],
            };
        });
    };
    return (
        <div className={styles.offers_list_filter}>
            <div style={{ maxHeight: height }} className={styles.offers_list_filter__body}>
                <div ref={ref}>
                    <div className={styles.offers_list_filter__inner}>
                        <div className={styles.offers_list_filter__block}>
                            <CommonLabel className={styles.offers_list_filter__label}>Доходность, %</CommonLabel>
                            <RangeSelect value={profit} onChange={value => setProfit(value as number[])} />
                        </div>
                        <div className={styles.offers_list_filter__block}>
                            <CommonLabel className={styles.offers_list_filter__label}>Срок, мес.</CommonLabel>
                            <RangeSelect value={term} onChange={value => setTerm(value as number[])} />
                        </div>
                        <div className={styles.offers_list_filter__block}>
                            <CommonLabel className={styles.offers_list_filter__label}>LTV, %</CommonLabel>
                            <RangeSelect value={ltv} onChange={value => setLtv(value as number[])} />
                        </div>
                        <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} wide>
                            <Button onClick={handleClick}>Отфильтровать</Button>
                        </PrimaryButton>
                    </div>
                </div>
            </div>
            <footer className={styles.offers_list_filter__footer}>
                <div className={styles.offers_list_filter__open} onClick={toggle}>
                    {active ? "Свернуть фильтры" : "Показать фильтры"}
                    <DropdownArrowButton active={active} />
                </div>
                <VisibilitySelect visibility={visibility} setVisibility={setVisibility} />
            </footer>
        </div>
    );
};

export default OffersListFilter;
