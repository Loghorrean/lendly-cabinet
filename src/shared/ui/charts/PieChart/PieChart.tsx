import { ChartProps } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

type Props = Omit<ChartProps<"pie">, "type">;

const PieChart = ({ ...props }: Props) => {
    return <Pie {...props} data={props.data} />;
};

export default PieChart;
