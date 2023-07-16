"use client";

import styles from "./LoginForm.module.scss";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import PasswordInput from "@/src/shared/ui/inputs/PasswordInput";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import { PRIMARY_BUTTON_ARROW_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";
import { SyntheticEvent } from "react";
import AuthLink from "@/src/widgets/auth/AuthLink";

const LoginForm = () => {
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log("FORM SUBMITTED");
    };
    return (
        <form className={styles.login_form} onSubmit={handleSubmit}>
            <div className={styles.login_form__inputs}>
                <div className={styles.login_form__group}>
                    <CommonLabel htmlFor="email">E-mail</CommonLabel>
                    <CommonInput id="email">
                        <CommonInput.Container className={styles.login_form__input_container}>
                            <CommonInput.Input placeholder="ivan@example.com" />
                        </CommonInput.Container>
                    </CommonInput>
                </div>
                <div className={styles.login_form__group}>
                    <CommonLabel htmlFor="password">Пароль</CommonLabel>
                    <PasswordInput id="password">
                        <PasswordInput.Container className={styles.login_form__input_container}>
                            <PasswordInput.Input placeholder="Пароль" />
                        </PasswordInput.Container>
                    </PasswordInput>
                </div>
            </div>
            <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} arrow wide>
                <Button type="submit" className={styles.login_form__submit}>
                    Войти
                    <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                </Button>
            </PrimaryButton>
            <AuthLink href="/auth/forgot-password">Забыли пароль?</AuthLink>
        </form>
    );
};

export default LoginForm;
