import styles from "./AllPortfolioStatistics.module.scss";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import { Money } from "@/src/shared/ui/utils";
import ChartEntry from "@/src/shared/ui/charts/ChartEntry";
import PieChart from "@/src/shared/ui/charts/PieChart";

const AllPortfolioStatistics = () => {
    return (
        <CommonBlock className={styles.all_portfolio_statistics}>
            <CommonBlock.Title className={styles.all_portfolio_statistics__title}>Общий портфель</CommonBlock.Title>
            <div className={styles.all_portfolio_statistics__grid}>
                <div className={styles.all_portfolio_statistics__left}>
                    <div className={styles.all_portfolio_statistics__chart}>
                        <PieChart
                            data={{
                                datasets: [
                                    {
                                        data: [60000, 50000, 40000],
                                        backgroundColor: ["#363637", "#2b9159", "#E4EAE2"],
                                    },
                                ],
                            }}
                        />
                    </div>
                </div>
                <div className={styles.all_portfolio_statistics__info}>
                    <header className={styles.all_portfolio_statistics__total}>
                        <div>Всего</div>
                        <Money money={{ amount: 13828000, currencyCode: "RUB" }} />
                    </header>
                    <ul className={styles.all_portfolio_statistics__values}>
                        <ChartEntry label="Займы" className={styles.all_portfolio_statistics__loans}>
                            <Money money={{ amount: 2300000, currencyCode: "RUB" }} />
                        </ChartEntry>
                        <ChartEntry label="Проекты" className={styles.all_portfolio_statistics__projects}>
                            <Money money={{ amount: 2300000, currencyCode: "RUB" }} />
                        </ChartEntry>
                        <ChartEntry label="Просрочка" className={styles.all_portfolio_statistics__delay}>
                            <Money money={{ amount: 2300000, currencyCode: "RUB" }} />
                        </ChartEntry>
                    </ul>
                </div>
            </div>
        </CommonBlock>
    );
};

export default AllPortfolioStatistics;
