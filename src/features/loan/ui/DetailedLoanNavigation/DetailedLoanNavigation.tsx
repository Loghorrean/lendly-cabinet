import ProjectNavigation from "@/src/entities/project/ui/ProjectNavigation";
import { ObjectValues } from "@/src/shared/utils";

export const LOAN_NAVIGATION_TAB = {
    DETAILS: "DETAILS",
    LOAN_ABOUT: "LOAN_ABOUT",
    PROJECT_ABOUT: "PROJECT_ABOUT",
    OFFERS: "OFFERS",
    SECURITY: "SECURITY",
    SELLER: "SELLER",
    PROJECT_MANAGER: "PROJECT_MANAGER",
    HISTORY: "HISTORY",
    SCHEDULE: "SCHEDULE",
    PROJECT_REPORT: "PROJECT_REPORT",
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
                active={tab === LOAN_NAVIGATION_TAB.LOAN_ABOUT}
                onSelected={() => setTab(LOAN_NAVIGATION_TAB.LOAN_ABOUT)}
            >
                О займе
            </ProjectNavigation.Element>
            <ProjectNavigation.Element
                active={tab === LOAN_NAVIGATION_TAB.PROJECT_ABOUT}
                onSelected={() => setTab(LOAN_NAVIGATION_TAB.PROJECT_ABOUT)}
            >
                О проекте
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
                active={tab === LOAN_NAVIGATION_TAB.PROJECT_MANAGER}
                onSelected={() => setTab(LOAN_NAVIGATION_TAB.PROJECT_MANAGER)}
            >
                Управляющий проектом
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
                active={tab === LOAN_NAVIGATION_TAB.PROJECT_REPORT}
                onSelected={() => setTab(LOAN_NAVIGATION_TAB.PROJECT_REPORT)}
            >
                Отчеты по проекту
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
