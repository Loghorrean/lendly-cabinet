import styles from "./PrimaryMarketBlock.module.scss";
import QualifiedInvestorRequirement from "@/src/widgets/primary-market/ui/QualifiedInvestorRequirement";

const PrimaryMarketBlock = () => {
    return (
        <div className={styles.primary_market_block}>
            <QualifiedInvestorRequirement />
        </div>
    );
};

export default PrimaryMarketBlock;
