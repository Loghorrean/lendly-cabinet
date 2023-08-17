import styles from "./TrafficLight.module.scss";
import { cn, ObjectValues } from "@/src/shared/utils";

export const TRAFFIC_INDICATOR_COLOR = {
    GREEN: styles.traffic_light__indicator___green,
    YELLOW: styles.traffic_light__indicator___yellow,
    RED: styles.traffic_light__indicator___red,
} as const;

export type TrafficIndicatorColor = ObjectValues<typeof TRAFFIC_INDICATOR_COLOR>;

type Props = {
    color: TrafficIndicatorColor;
    bordered?: boolean;
};

const TrafficLight = ({ color, bordered = true }: Props) => {
    const indicator = <div className={cn(styles.traffic_light__indicator, color)}></div>;
    if (!bordered) {
        return indicator;
    }
    return <div className={styles.traffic_light}>{indicator}</div>;
};

export default TrafficLight;
