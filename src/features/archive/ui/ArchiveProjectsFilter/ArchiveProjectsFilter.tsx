"use client";

import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./ArchiveProjectsFilter.module.scss";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import RangeSelect from "@/src/shared/ui/select/RangeSelect";
import { useState } from "react";
import { ENTITY_VISIBILITY, EntityVisibility } from "@/src/entities/visibility/model";
import VisibilitySelect from "@/src/entities/visibility/ui/VisibilitySelect";

const ArchiveProjectsFilter = () => {
    const [profit, setProfit] = useState([0, 100]);
    const [term, setTerm] = useState([0, 100]);
    const [ltvPercent, setLtvPercent] = useState([0, 100]);
    const [amount, setAmount] = useState([0, 100]);
    const [visibility, setVisibility] = useState<EntityVisibility>(ENTITY_VISIBILITY.CARDS);
    return (
        <CommonBlock className={styles.archive_projects_filter}>
            <div className={styles.archive_projects_filter__block}>
                <CommonLabel className={styles.archive_projects_filter__label}>Доходность, %</CommonLabel>
                <RangeSelect value={profit} onChange={value => setProfit(value as number[])} />
            </div>
            <div className={styles.archive_projects_filter__block}>
                <CommonLabel className={styles.archive_projects_filter__label}>Срок, мес.</CommonLabel>
                <RangeSelect value={term} onChange={value => setTerm(value as number[])} />
            </div>
            <div className={styles.archive_projects_filter__block}>
                <CommonLabel className={styles.archive_projects_filter__label}>LTV, %</CommonLabel>
                <RangeSelect value={ltvPercent} onChange={value => setLtvPercent(value as number[])} />
            </div>
            <div className={styles.archive_projects_filter__block}>
                <CommonLabel className={styles.archive_projects_filter__label}>Цель, руб.</CommonLabel>
                <RangeSelect value={amount} onChange={value => setAmount(value as number[])} />
            </div>
            <footer className={styles.archive_projects_filter__footer}>
                <div></div>
                <VisibilitySelect visibility={visibility} setVisibility={setVisibility} />
            </footer>
        </CommonBlock>
    );
};

export default ArchiveProjectsFilter;
