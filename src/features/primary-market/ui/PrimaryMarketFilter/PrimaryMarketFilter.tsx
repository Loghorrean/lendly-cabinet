import { useDropdown, useToggle } from "@/src/shared/utils";
import styles from "./PrimaryMarketFilter.module.scss";

//TODO: FINISH
const PrimaryMarketFilter = () => {
    const [active, toggle] = useToggle();
    const [ref, height] = useDropdown(active);
    return (
        <div>
            <div className={styles.primary_market_filter} style={{ maxHeight: height }}>
                <div ref={ref}>
                    <div className={styles.primary_market_filter__inner}></div>
                </div>
            </div>
            <div className={styles.primary_market_filter__open}></div>
        </div>
    );
};

export default PrimaryMarketFilter;
