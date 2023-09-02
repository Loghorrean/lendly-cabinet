import styles from "./PortfolioLoansStatistics.module.scss";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import { useMemo } from "react";
import { Money } from "@/src/shared/ui/utils";
import RoundChart from "@/src/shared/ui/charts/RoundChart";
import ChartEntry from "@/src/shared/ui/charts/ChartEntry";

const PortfolioLoansStatistics = () => {
    const getDatasets = useMemo(() => {
        return [
            {
                data: [1805, 680, 4201, 5910],
                backgroundColor: ["#363637", "#2b9159", "#A3E4AE", "#E0E0E0"],
                borderWidth: [0, 0, 0, 0],
            },
        ];
    }, []);
    return (
        <CommonBlock className={styles.portfolio_loans_statistics}>
            <header className={styles.portfolio_loans_statistics__header}>
                <CommonBlock.Title>Займы</CommonBlock.Title>
            </header>
            <div className={styles.portfolio_loans_statistics__chart}>
                <RoundChart data={{ datasets: getDatasets }}>
                    <Money money={{ amount: 1259600, currencyCode: "RUB" }} />
                </RoundChart>
            </div>
            <footer className={styles.portfolio_loans_statistics__footer}>
                <ul className={styles.portfolio_loans_statistics__list}>
                    <ChartEntry label="Текущий с buyback" className={styles.portfolio_loans_statistics__buyback}>
                        <Money money={{ amount: 180500, currencyCode: "RUB" }} />
                    </ChartEntry>
                    <ChartEntry
                        label="Текущий с buyback (в просрочке)"
                        className={styles.portfolio_loans_statistics__buyback_delay}
                    >
                        <Money money={{ amount: 68000, currencyCode: "RUB" }} />
                    </ChartEntry>
                    <ChartEntry label="Текущий без buyback" className={styles.portfolio_loans_statistics__no_buyback}>
                        <Money money={{ amount: 420100, currencyCode: "RUB" }} />
                    </ChartEntry>
                    <ChartEntry
                        label="Текущий с buyback (в просрочке)"
                        className={styles.portfolio_loans_statistics__no_buyback_delay}
                    >
                        <Money money={{ amount: 591000, currencyCode: "RUB" }} />
                    </ChartEntry>
                </ul>
            </footer>
        </CommonBlock>
    );
};

export default PortfolioLoansStatistics;
