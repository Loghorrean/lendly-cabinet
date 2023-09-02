import styles from "./PortfolioProjectsStatistics.module.scss";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import { useMemo } from "react";
import RoundChart from "@/src/shared/ui/charts/RoundChart";
import { Money } from "@/src/shared/ui/utils";
import ChartEntry from "@/src/shared/ui/charts/ChartEntry";

const PortfolioProjectsStatistics = () => {
    const getDatasets = useMemo(() => {
        return [
            {
                data: [4201, 23000, 680, 5910],
                backgroundColor: ["#363637", "#2b9159", "#A3E4AE", "#E0E0E0"],
                borderWidth: [0, 0, 0, 0],
            },
        ];
    }, []);
    return (
        <CommonBlock className={styles.portfolio_projects_statistics}>
            <header className={styles.portfolio_projects_statistics__header}>
                <CommonBlock.Title>Проекты</CommonBlock.Title>
            </header>
            <div className={styles.portfolio_projects_statistics__chart}>
                <RoundChart data={{ datasets: getDatasets }}>
                    <Money money={{ amount: 1259600, currencyCode: "RUB" }} />
                </RoundChart>
            </div>
            <footer className={styles.portfolio_projects_statistics__footer}>
                <ul className={styles.portfolio_projects_statistics__list}>
                    <ChartEntry label="с фиксированной ставкой" className={styles.portfolio_projects_statistics__fixed}>
                        <Money money={{ amount: 420100, currencyCode: "RUB" }} />
                    </ChartEntry>
                    <ChartEntry
                        label="си фиксированной ставкой (в просрочке)"
                        className={styles.portfolio_projects_statistics__fixed_delay}
                    >
                        <Money money={{ amount: 2300000, currencyCode: "RUB" }} />
                    </ChartEntry>
                    <ChartEntry label="с переменной ставкой" className={styles.portfolio_projects_statistics__variable}>
                        <Money money={{ amount: 68000, currencyCode: "RUB" }} />
                    </ChartEntry>
                    <ChartEntry
                        label="с переменной ставкой (в просрочке)"
                        className={styles.portfolio_projects_statistics__variable_delay}
                    >
                        <Money money={{ amount: 591000, currencyCode: "RUB" }} />
                    </ChartEntry>
                </ul>
            </footer>
        </CommonBlock>
    );
};

export default PortfolioProjectsStatistics;
