import styles from "./DepositBlock.module.scss";
import DepositReminder from "@/src/features/deposit/ui/DepositIdReminder";
import DepositMain from "@/src/widgets/deposit/ui/DepositMain";
import BreadCrumbs from "@/src/shared/ui/blocks/BreadCrumbs";
import GoBackButton from "@/src/shared/ui/buttons/GoBackButton";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";

const DepositBlock = () => {
    return (
        <div className={styles.deposit_block}>
            <BreadCrumbs
                links={[
                    { href: "/dashboard", text: "Активы" },
                    { href: "/deposit", text: "Депозит" },
                ]}
            />
            <div className={styles.deposit_block__header}>
                <GoBackButton />
                <Heading headingType={HEADING_TYPE.H2} className={styles.deposit_block__heading}>
                    Пополнение счета
                </Heading>
            </div>
            <div className={styles.deposit_block}>
                <DepositReminder />
                <DepositMain />
            </div>
        </div>
    );
};

export default DepositBlock;
