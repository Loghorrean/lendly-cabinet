import styles from "./CommonInvestmentTitle.module.scss";
import RoundProgressBar from "@/src/shared/ui/utils/RoundProgressBar";

//TODO: REFACTOR AFTER BACKEND INTEGRATION
type Props = {
    percentage: number;
    types: Array<string>;
    title: string;
    id: string;
};

const CommonInvestmentTitle = ({ percentage, title, types, id }: Props) => {
    const renderTypes = () => {
        return types.map(type => {
            return (
                <div key={type} className={styles.common_investment_title__type}>
                    {type}
                </div>
            );
        });
    };
    return (
        <div className={styles.common_investment_title}>
            <RoundProgressBar amount={percentage}>
                <text
                    className={styles.common_investment_title__percent}
                    x="50%"
                    y="50%"
                    dy="-0.1em"
                    textAnchor="middle"
                >
                    {percentage}%
                </text>
                <text
                    className={styles.common_investment_title__percent_text}
                    x="50%"
                    y="50%"
                    dy="1.25em"
                    textAnchor="middle"
                >
                    LTV
                </text>
            </RoundProgressBar>
            <div>
                <div className={styles.common_investment_title__types}>{renderTypes()}</div>
                <p className={styles.common_investment_title__title}>{title}</p>
                <span className={styles.common_investment_title__id}>ID {id}</span>
            </div>
        </div>
    );
};

export default CommonInvestmentTitle;
