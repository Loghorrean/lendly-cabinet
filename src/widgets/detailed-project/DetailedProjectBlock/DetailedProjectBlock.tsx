"use client";

import styles from "./DetailedProjectBlock.module.scss";
import BreadCrumbs from "@/src/shared/ui/blocks/BreadCrumbs";
import GoBackButton from "@/src/shared/ui/buttons/GoBackButton";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import DetailedProjectMain from "@/src/widgets/detailed-project/DetailedProjectMain";
import DetailedProjectInfo from "@/src/widgets/detailed-project/DetailedProjectInfo";
import ProjectImageGallery from "@/src/entities/project/ui/ProjectImageGallery";
import DetailedLoanNavigation from "@/src/features/loan/ui/DetailedLoanNavigation";
import { ReactNode, useRef, useState } from "react";
import {
    LOAN_NAVIGATION_TAB,
    LoanNavigationTab,
} from "@/src/features/loan/ui/DetailedLoanNavigation/DetailedLoanNavigation";
import DetailedLoanAboutBlock from "../tabs/DetailedLoanAboutBlock";
import DetailedLoanPledge from "../tabs/DetailedLoanPledge";
import DetailedLoanSeller from "../tabs/DetailedLoanSeller";
import DetailedLoanDetails from "../tabs/DetailedLoanDetails";
import { DetailedProject } from "@/src/entities/project/model";
import DetailedProjectProgress from "@/src/widgets/detailed-project/DetailedProjectProgress";
import { isNotEmpty } from "@/src/shared/utils";

type Props = {
    project: DetailedProject;
};

const DetailedProjectBlock = ({ project }: Props) => {
    const [tab, setTab] = useState<LoanNavigationTab>(LOAN_NAVIGATION_TAB.ABOUT);
    const availableTabs = useRef<Record<LoanNavigationTab, ReactNode>>({
        [LOAN_NAVIGATION_TAB.DETAILS]: <DetailedLoanDetails />,
        [LOAN_NAVIGATION_TAB.ABOUT]: <DetailedLoanAboutBlock />,
        [LOAN_NAVIGATION_TAB.OFFERS]: <DetailedLoanAboutBlock />,
        [LOAN_NAVIGATION_TAB.SECURITY]: <DetailedLoanPledge />,
        [LOAN_NAVIGATION_TAB.SELLER]: <DetailedLoanSeller />,
        [LOAN_NAVIGATION_TAB.HISTORY]: <DetailedLoanAboutBlock />,
        [LOAN_NAVIGATION_TAB.SCHEDULE]: <DetailedLoanAboutBlock />,
        [LOAN_NAVIGATION_TAB.DELAY_EVENTS]: <DetailedLoanAboutBlock />,
    });
    return (
        <div className={styles.detailed_project_block}>
            <BreadCrumbs
                links={[
                    { href: "/dashboard", text: "Активы" },
                    { href: "/market", text: "Рынок" },
                    { href: `/project/${project.uuid}`, text: `${project.general.name}` },
                ]}
            />
            <div className={styles.detailed_project_block__header}>
                <GoBackButton />
                <Heading headingType={HEADING_TYPE.H1} className={styles.detailed_project_block__heading}>
                    {project.general.name}
                </Heading>
            </div>
            <DetailedProjectMain>
                <div className={styles.detailed_project_block__gallery_container}>
                    <ProjectImageGallery photoUrls={project.general.photoUrls} />
                    {isNotEmpty(project.loan.loanSum) && (
                        <DetailedProjectProgress acquired={project.loan.investedSum} required={project.loan.loanSum} />
                    )}
                </div>
                <DetailedProjectInfo loan={project.loan} />
            </DetailedProjectMain>
            <DetailedLoanNavigation tab={tab} setTab={setTab} />
            {availableTabs.current[tab]}
        </div>
    );
};

export default DetailedProjectBlock;
