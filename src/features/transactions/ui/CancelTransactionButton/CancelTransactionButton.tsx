import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import styles from "./CancelTransactionButton.module.scss";
import { useState } from "react";
import CancelTransactionModal from "@/src/features/transactions/ui/CancelTransactionModal";

const CancelTransactionButton = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <>
            <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                <Button className={styles.cancel_transaction_button} onClick={() => setModalOpened(true)}>
                    Отменить операцию
                </Button>
            </PrimaryButton>
            <CancelTransactionModal active={modalOpened} onClose={() => setModalOpened(false)} />
        </>
    );
};

export default CancelTransactionButton;
