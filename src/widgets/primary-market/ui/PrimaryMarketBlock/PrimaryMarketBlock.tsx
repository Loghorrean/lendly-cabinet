import styles from "./PrimaryMarketBlock.module.scss";
import QualifiedInvestorRequirement from "@/src/widgets/primary-market/ui/QualifiedInvestorRequirement";
import PrimaryMarketMain from "../PrimaryMarketMain";

const isQual = false;

const PrimaryMarketBlock = () => {
    return (
        <div className={styles.primary_market_block}>
            {isQual ? <PrimaryMarketMain /> : <QualifiedInvestorRequirement />}
        </div>
    );
};

export default PrimaryMarketBlock;
