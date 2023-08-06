import styles from "./RangeSelect.module.scss";
import { cn } from "@/src/shared/utils";
import Slider, { SliderProps } from "rc-slider";

type Props = SliderProps;

const RangeSelect = ({ ...props }: Props) => {
    return (
        <div className={styles.range_select}>
            <div className={styles.range_select__value}>{(props.value as number[])[0] ?? 0}</div>
            <div className={styles.range_select__value}>-</div>
            <div className={styles.range_select__value}>{(props.value as number[])[1] ?? 100}</div>
            <Slider {...props} range className={cn(styles.range_select__range, props.className)} />
        </div>
    );
};

export default RangeSelect;
