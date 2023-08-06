import { Modal } from "@/src/shared/ui/layout";
import { ModalProps } from "@/src/shared/ui/layout/Modal/Modal";
import styles from "./CancelTransactionModal.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";

type Props = ModalProps;

const CancelTransactionModal = ({ active, onClose, ...props }: Props) => {
    return (
        <Modal active={active} onClose={onClose} {...props} className={styles.cancel_transaction_modal}>
            <Heading headingType={HEADING_TYPE.H2} className={styles.cancel_transaction_modal__heading}>
                Вы действительно хотите отменить заявку на вывод средств?
            </Heading>
            <div className={styles.cancel_transaction_modal__actions}>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                    <Button onClick={onClose}>Закрыть</Button>
                </PrimaryButton>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN}>
                    <Button>Подтвердить</Button>
                </PrimaryButton>
            </div>
        </Modal>
    );
};

export default CancelTransactionModal;
