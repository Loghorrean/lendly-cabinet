"use client";

import styles from "./ProfileGeneral.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import { useState } from "react";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import CommonInputBlock from "@/src/shared/ui/inputs/CommonInputBlock";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";
import NotarizedDocUpload from "@/src/features/profile/ui/NotarizedDocUpload";
import ProfileCommonBlock from "@/src/entities/profile/ui/ProfileCommonBlock";

//TODO: ADD DEFAULT PROFILE DATA
const ProfileGeneral = () => {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <ProfileCommonBlock>
            <div className={styles.profile_general}>
                <div>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.profile_general__heading}>
                        Личные данные
                    </Heading>
                    <div className={styles.profile_general__personal_form}>
                        <CommonInputBlock>
                            <CommonLabel htmlFor="lastname">Фамилия</CommonLabel>
                            <CommonInput id="lastname" value={lastName} onChange={setLastName}>
                                <CommonInput.Container>
                                    <CommonInput.Input placeholder="Иванов" />
                                </CommonInput.Container>
                            </CommonInput>
                        </CommonInputBlock>
                        <CommonInputBlock>
                            <CommonLabel htmlFor="firstname">Имя</CommonLabel>
                            <CommonInput id="firstname" value={firstName} onChange={setFirstName}>
                                <CommonInput.Container>
                                    <CommonInput.Input placeholder="Иван" />
                                </CommonInput.Container>
                            </CommonInput>
                        </CommonInputBlock>
                        <CommonInputBlock className={styles.profile_general__full_input}>
                            <CommonLabel htmlFor="middlename">Отчество</CommonLabel>
                            <CommonInput id="middlename" value={middleName} onChange={setMiddleName}>
                                <CommonInput.Container>
                                    <CommonInput.Input placeholder="Иванович" />
                                </CommonInput.Container>
                            </CommonInput>
                        </CommonInputBlock>
                        <CommonInputBlock className={styles.profile_general__full_input}>
                            <CommonLabel htmlFor="email">E-mail</CommonLabel>
                            <CommonInput id="email" value={email} onChange={setEmail}>
                                <CommonInput.Container>
                                    <CommonInput.Input placeholder="example@gmail.com" />
                                </CommonInput.Container>
                            </CommonInput>
                        </CommonInputBlock>
                    </div>
                </div>
                <div>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.profile_general__heading}>
                        Пароль
                    </Heading>
                    <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                        <Button className={styles.profile_general__change_password}>Изменить</Button>
                    </PrimaryButton>
                </div>
                <div>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.profile_general__heading}>
                        Нотариальная доверенность
                    </Heading>
                    <NotarizedDocUpload />
                </div>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} wide>
                    <Button disabled className={styles.profile_general__submit}>
                        Сохранить изменения
                    </Button>
                </PrimaryButton>
            </div>
        </ProfileCommonBlock>
    );
};

export default ProfileGeneral;
