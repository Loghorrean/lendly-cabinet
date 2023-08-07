import ProjectNavigation from "@/src/entities/project/ui/ProjectNavigation";
import { ObjectValues } from "@/src/shared/utils";

export const LOAN_NAVIGATION_TAB = {
    DETAILS: "DETAILS",
    ABOUT: "ABOUT",
    OFFERS: "OFFERS",
    SECURITY: "SECURITY",
    SELLER: "SELLER",
    HISTORY: "HISTORY",
    SCHEDULE: "SCHEDULE",
    DELAY_EVENTS: "DELAY_EVENTS",
} as const;

export type LoanNavigationTab = ObjectValues<typeof LOAN_NAVIGATION_TAB>;

type Props = {
    tab: LoanNavigationTab;
    setTab: (tab: LoanNavigationTab) => void;
};

const DetailedLoanNavigation = ({ tab, setTab }: Props) => {
    return (
        <ProjectNavigation>
            <ProjectNavigation.Element
                active={tab === LOAN_NAVIGATION_TAB.DETAILS}
                onSelected={() => setTab(LOAN_NAVIGATION_TAB.DETAILS)}
            >
                Детали сделки
            </ProjectNavigation.Element>
            <ProjectNavigation.Element
                active={tab === LOAN_NAVIGATION_TAB.ABOUT}
                onSelected={() => setTab(LOAN_NAVIGATION_TAB.ABOUT)}
            >
                О займе
            </ProjectNavigation.Element>
            <ProjectNavigation.Element
                active={tab === LOAN_NAVIGATION_TAB.OFFERS}
                onSelected={() => setTab(LOAN_NAVIGATION_TAB.OFFERS)}
            >
                Предложения
            </ProjectNavigation.Element>
            <ProjectNavigation.Element
                active={tab === LOAN_NAVIGATION_TAB.SECURITY}
                onSelected={() => setTab(LOAN_NAVIGATION_TAB.SECURITY)}
            >
                Обеспечение
            </ProjectNavigation.Element>
            <ProjectNavigation.Element
                active={tab === LOAN_NAVIGATION_TAB.SELLER}
                onSelected={() => setTab(LOAN_NAVIGATION_TAB.SELLER)}
            >
                Продавец
            </ProjectNavigation.Element>
            <ProjectNavigation.Element
                active={tab === LOAN_NAVIGATION_TAB.HISTORY}
                onSelected={() => setTab(LOAN_NAVIGATION_TAB.HISTORY)}
            >
                История в Лендли
            </ProjectNavigation.Element>
            <ProjectNavigation.Element
                active={tab === LOAN_NAVIGATION_TAB.SCHEDULE}
                onSelected={() => setTab(LOAN_NAVIGATION_TAB.SCHEDULE)}
            >
                График выплат
            </ProjectNavigation.Element>
            <ProjectNavigation.Element
                active={tab === LOAN_NAVIGATION_TAB.DELAY_EVENTS}
                onSelected={() => setTab(LOAN_NAVIGATION_TAB.DELAY_EVENTS)}
            >
                События по просрочке
            </ProjectNavigation.Element>
        </ProjectNavigation>
    );
};

export default DetailedLoanNavigation;
