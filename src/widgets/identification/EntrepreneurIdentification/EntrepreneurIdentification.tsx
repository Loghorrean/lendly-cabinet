import styles from "./EntrepreneurIdentification.module.scss";
import { SyntheticEvent } from "react";
import PrimaryButton, { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";

const EntrepreneurIdentification = () => {
    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit} className={styles.entrepreneur_identification}>
            <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN}>
                <Button type="submit" disabled className={styles.entrepreneur_identification__submit}>
                    Подать заявку
                </Button>
            </PrimaryButton>
        </form>
    );
};

export default EntrepreneurIdentification;
