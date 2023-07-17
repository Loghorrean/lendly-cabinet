"use client";

import { Button } from "@/src/shared/ui/buttons";
import styles from "./GoBackButton.module.scss";
import ArrowLeftTailed from "@/src/shared/ui/svg/arrows/ArrowLeftTailed";
import { useRedirectBack } from "@/src/shared/utils";

const GoBackButton = () => {
    const goBack = useRedirectBack();
    return (
        <Button className={styles.go_back_button} onClick={goBack}>
            <ArrowLeftTailed />
        </Button>
    );
};

export default GoBackButton;
