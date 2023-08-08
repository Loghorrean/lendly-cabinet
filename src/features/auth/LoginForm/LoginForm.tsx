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
import { SyntheticEvent, useCallback, useMemo, useState } from "react";
import AuthLink from "@/src/widgets/auth/AuthLink";
import { useActionMessages } from "@/src/shared/action-messages/store";
import { isNotEmpty, useEffectOnUpdate, ValidationErrors } from "@/src/shared/utils";
import { ACTION_MESSAGE_TYPE } from "@/src/shared/action-messages/model/ActionMessage";
import { useLoginMutation } from "@/src/entities/auth/hooks";
import Loader from "@/src/shared/ui/loaders/Loader";
import { createAuthTokenManager } from "@/src/entities/auth/utils";
import { useRouter } from "next/navigation";

type LoginFormErrors = {
    username?: ValidationErrors;
    password?: ValidationErrors;
};

const LoginForm = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isInitial, setIsInitial] = useState(true);
    const loginMutation = useLoginMutation();
    const { addMessage } = useActionMessages();

    const validateForm = useCallback((): LoginFormErrors => {
        const newErrors: LoginFormErrors = {};
        if (username === "") {
            newErrors.username = ["Не введено имя пользователя"];
        }
        if (password === "") {
            newErrors.password = ["Не введен пароль"];
        }
        return newErrors;
    }, []);

    const formErrors = useMemo(() => {
        if (!isInitial) {
            return validateForm();
        }
    }, []);

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        loginMutation.mutate(
            { username: username.trim(), password: password.trim() },
            {
                onSuccess: token => {
                    const tokenManager = createAuthTokenManager();
                    tokenManager!.create(token);
                    router.push("/dashboard");
                },
            }
        );
        setIsInitial(false);
    };

    useEffectOnUpdate(() => {
        if (loginMutation.isError) {
            addMessage(ACTION_MESSAGE_TYPE.ERROR, "Неверный логин/пароль!");
        }
    }, [loginMutation.isError]);

    return (
        <form className={styles.login_form} onSubmit={handleSubmit}>
            <div className={styles.login_form__inputs}>
                <div className={styles.login_form__group}>
                    <CommonLabel htmlFor="username">E-mail</CommonLabel>
                    <CommonInput
                        id="username"
                        value={username}
                        onChange={setUsername}
                        error={isNotEmpty(formErrors?.username)}
                    >
                        <CommonInput.Container className={styles.login_form__input_container}>
                            <CommonInput.Input placeholder="ivan@example.com" />
                        </CommonInput.Container>
                    </CommonInput>
                </div>
                <div className={styles.login_form__group}>
                    <CommonLabel htmlFor="password">Пароль</CommonLabel>
                    <PasswordInput
                        id="password"
                        value={password}
                        onChange={setPassword}
                        error={isNotEmpty(formErrors?.password)}
                    >
                        <PasswordInput.Container className={styles.login_form__input_container}>
                            <PasswordInput.Input placeholder="Пароль" />
                        </PasswordInput.Container>
                    </PasswordInput>
                </div>
            </div>
            <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} arrow wide>
                <Button type="submit" className={styles.login_form__submit} disabled={loginMutation.isLoading}>
                    Войти
                    <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                </Button>
            </PrimaryButton>
            {loginMutation.isLoading && (
                <div className={styles.login_form__loading}>
                    <Loader dark />
                </div>
            )}
            <AuthLink href="/auth/forgot-password">Забыли пароль?</AuthLink>
        </form>
    );
};

export default LoginForm;
