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
};

const TrafficLight = ({ color }: Props) => {
    return (
        <div className={styles.traffic_light}>
            <div className={cn(styles.traffic_light__indicator, color)}></div>
        </div>
    );
};

export default TrafficLight;
