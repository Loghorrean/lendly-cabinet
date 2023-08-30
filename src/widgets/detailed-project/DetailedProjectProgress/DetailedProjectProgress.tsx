import styles from "./DetailedProjectProgress.module.scss";
import { Money as MoneyBlock } from "@/src/shared/ui/utils";
import ProgressBar from "@/src/shared/ui/utils/ProgressBar";
import { Money } from "@/src/shared/models/common";
import { isNotEmpty, isValueEmpty } from "@/src/shared/utils";

type Props = {
    acquired?: Money;
    required: Money;
};

const DetailedProjectProgress = ({ acquired, required }: Props) => {
    const filledAmount = () => {
        if (isValueEmpty(acquired)) {
            return 0;
        }
        return acquired.amount / required.amount;
    };
    return (
        <div className={styles.detailed_project_progress}>
            <div className={styles.detailed_project_progress_values}>
                <div className={styles.detailed_project_progress_block}>
                    <div className={styles.detailed_project_progress_label}>Набрано</div>
                    <div className={styles.detailed_project_progress_value}>
                        <MoneyBlock
                            money={isNotEmpty(acquired) ? acquired : { amount: 0, currencyCode: "RUB" }}
                            abbreviated
                        />
                    </div>
                </div>
                <div className={styles.detailed_project_progress_block}>
                    <div className={styles.detailed_project_progress_label}>Цель</div>
                    <div className={styles.detailed_project_progress_value}>
                        <MoneyBlock money={required} abbreviated />
                    </div>
                </div>
            </div>
            <ProgressBar amount={filledAmount()} />
        </div>
    );
};

export default DetailedProjectProgress;
