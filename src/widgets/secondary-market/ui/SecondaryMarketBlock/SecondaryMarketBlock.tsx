import styles from "./SecondaryMarketBlock.module.scss";
import SecondaryMarketMain from "@/src/widgets/offer/SecondaryMarketMain";

const SecondaryMarketBlock = () => {
    return (
        <div className={styles.secondary_market_block}>
            <SecondaryMarketMain />
        </div>
    );
};

export default SecondaryMarketBlock;
