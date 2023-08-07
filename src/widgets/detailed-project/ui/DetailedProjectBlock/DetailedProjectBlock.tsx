"use client";

import styles from "./DetailedProjectBlock.module.scss";
import BreadCrumbs from "@/src/shared/ui/blocks/BreadCrumbs";
import GoBackButton from "@/src/shared/ui/buttons/GoBackButton";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import DetailedProjectMain from "@/src/widgets/detailed-project/ui/DetailedProjectMain";
import DetailedProjectInfo from "@/src/widgets/detailed-project/ui/DetailedProjectInfo";
import ProjectImageGallery from "@/src/entities/project/ui/ProjectImageGallery";
import { Money } from "@/src/shared/ui/utils";
import ProgressBar from "@/src/shared/ui/utils/ProgressBar";
import DetailedLoanNavigation from "@/src/features/loan/ui/DetailedLoanNavigation";
import { useState } from "react";
import {
    LOAN_NAVIGATION_TAB,
    LoanNavigationTab,
} from "@/src/features/loan/ui/DetailedLoanNavigation/DetailedLoanNavigation";

const DetailedProjectBlock = () => {
    const [tab, setTab] = useState<LoanNavigationTab>(LOAN_NAVIGATION_TAB.ABOUT);
    return (
        <div className={styles.detailed_project_block}>
            <BreadCrumbs
                links={[
                    { href: "/dashboard", text: "Активы" },
                    { href: "/dashboard/market", text: "Рынок" },
                    { href: `/project/0efceec6-66b7-4cfd-baca-2238dba595c7`, text: "ООО “ЛендлиИнвестПромБанк”" },
                ]}
            />
            <div className={styles.detailed_project_block__header}>
                <GoBackButton />
                <Heading headingType={HEADING_TYPE.H1} className={styles.detailed_project_block__heading}>
                    ООО Карточка заявки
                </Heading>
            </div>
            <DetailedProjectMain>
                <div className={styles.detailed_project_block__gallery_container}>
                    <ProjectImageGallery />
                    <div className={styles.detailed_project_block__collected}>
                        <div className={styles.detailed_project_block__collected_values}>
                            <div className={styles.detailed_project_block__collected_block}>
                                <div className={styles.detailed_project_block__collected_label}>Набрано</div>
                                <div className={styles.detailed_project_block__collected_value}>
                                    <Money money={{ amount: 120000000, currencyCode: "RUB" }} abbreviated />
                                </div>
                            </div>
                            <div className={styles.detailed_project_block__collected_block}>
                                <div className={styles.detailed_project_block__collected_label}>Цель</div>
                                <div className={styles.detailed_project_block__collected_value}>
                                    <Money money={{ amount: 480000000, currencyCode: "RUB" }} abbreviated />
                                </div>
                            </div>
                        </div>
                        <ProgressBar amount={25} />
                    </div>
                </div>
                <DetailedProjectInfo />
            </DetailedProjectMain>
            <DetailedLoanNavigation tab={tab} setTab={setTab} />
        </div>
    );
};

export default DetailedProjectBlock;
