import { ChartProps, Doughnut } from "react-chartjs-2";
import styles from "./RoundChart.module.scss";
import { PropsWithChildren } from "react";

type Props = Omit<ChartProps<"doughnut">, "type">;

const RoundChart = ({ children, ...props }: PropsWithChildren<Props>) => {
    return (
        <div className={styles.round_chart}>
            <p className={styles.round_chart__label}>{children}</p>
            <Doughnut {...props} options={{ cutout: 109 }} />
        </div>
    );
};

export default RoundChart;
