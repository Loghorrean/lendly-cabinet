"use client";

import { useState } from "react";
import styles from "./ProfileIdentification.module.scss";
import ProfileCommonBlock from "@/src/entities/profile/ui/ProfileCommonBlock";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import CommonInputBlock from "@/src/shared/ui/inputs/CommonInputBlock";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import DateInput from "@/src/shared/ui/inputs/DateInput";
import CommonFileUpload from "@/src/entities/file/ui/CommonFileUpload";
import { useActionMessages } from "@/src/shared/action-messages/store";
import { ACTION_MESSAGE_TYPE } from "@/src/shared/action-messages/model/ActionMessage";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import IdentificationPhone from "@/src/features/identification/ui/IdentificationPhone";
import { createDefaultPhone, PhoneResult } from "@/src/entities/phone/models";
import { useCurrentProfile } from "@/src/entities/profile/hooks";

const ProfileIdentification = () => {
    const profile = useCurrentProfile();
    const { addMessage } = useActionMessages();
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [birthday, setBirthday] = useState<Date | null>(null);
    const [birthPlace, setBirthPlace] = useState("");
    const [seriesNumber, setSeriesNumber] = useState("");
    const [issuedWhen, setIssuedWhen] = useState<Date | null>(null);
    const [departmentCode, setDepartmentCode] = useState("");
    const [issuedBy, setIssuedBy] = useState("");
    const [inn, setInn] = useState("");
    const [phoneResult, setPhoneResult] = useState<PhoneResult>({
        phone: profile.phone ?? createDefaultPhone(),
        phoneVerified: profile.phoneVerified,
    });
    return (
        <ProfileCommonBlock>
            <form className={styles.profile_identification_form}>
                <div className={styles.profile_identification_form__block}>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.profile_identification_form__heading}>
                        Личные данные
                    </Heading>
                    <div className={styles.profile_identification_form__personal}>
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
                        <CommonInputBlock className={styles.profile_identification_form__full_input}>
                            <CommonLabel htmlFor="middlename">Имя</CommonLabel>
                            <CommonInput id="middlename" value={middleName} onChange={setMiddleName}>
                                <CommonInput.Container>
                                    <CommonInput.Input placeholder="Иванович" />
                                </CommonInput.Container>
                            </CommonInput>
                        </CommonInputBlock>
                        <CommonInputBlock>
                            <CommonLabel htmlFor="birthday">Дата рождения</CommonLabel>
                            <DateInput id="birthday" selected={birthday} onChange={setBirthday} />
                        </CommonInputBlock>
                        <CommonInputBlock>
                            <CommonLabel htmlFor="birthPlace">Место рождения</CommonLabel>
                            <CommonInput id="birthPlace" value={birthPlace} onChange={setBirthPlace}>
                                <CommonInput.Container>
                                    <CommonInput.Input placeholder="Москва" />
                                </CommonInput.Container>
                            </CommonInput>
                        </CommonInputBlock>
                    </div>
                </div>
                <div className={styles.profile_identification_form__block}>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.profile_identification_form__heading}>
                        Паспортные данные и ИНН
                    </Heading>
                    <div className={styles.profile_identification_form__passport}>
                        <CommonInputBlock>
                            <CommonLabel htmlFor="series">Номер и серия паспорта</CommonLabel>
                            <CommonInput id="series" value={seriesNumber} onChange={setSeriesNumber}>
                                <CommonInput.Container>
                                    <CommonInput.Input placeholder="0000 000000" mask="9999 999999" />
                                </CommonInput.Container>
                            </CommonInput>
                        </CommonInputBlock>
                        <CommonInputBlock>
                            <CommonLabel htmlFor="issued-when">Когда выдан</CommonLabel>
                            <DateInput id="issued-when" selected={issuedWhen} onChange={setIssuedWhen} />
                        </CommonInputBlock>
                        <CommonInputBlock>
                            <CommonLabel htmlFor="department-code">Код подразделения</CommonLabel>
                            <CommonInput id="department-code" value={departmentCode} onChange={setDepartmentCode}>
                                <CommonInput.Container>
                                    <CommonInput.Input placeholder="000-000" mask="999-999" />
                                </CommonInput.Container>
                            </CommonInput>
                        </CommonInputBlock>
                        <CommonInputBlock className={styles.profile_identification_form__full_input}>
                            <CommonLabel htmlFor="issued-by">Кем выдан</CommonLabel>
                            <CommonInput id="issued-by" value={issuedBy} onChange={setIssuedBy}>
                                <CommonInput.Container>
                                    <CommonInput.Input placeholder="УФМС" />
                                </CommonInput.Container>
                            </CommonInput>
                        </CommonInputBlock>
                        <CommonInputBlock className={styles.profile_identification_form__full_input}>
                            <CommonLabel htmlFor="inn">Укажите ИНН</CommonLabel>
                            <CommonInput id="inn" value={inn} onChange={setInn}>
                                <CommonInput.Container>
                                    <CommonInput.Input placeholder="00000000000000000" mask="99999999999999999" />
                                </CommonInput.Container>
                            </CommonInput>
                        </CommonInputBlock>
                    </div>
                </div>
                <div className={styles.profile_identification_form__block}>
                    <Heading headingType={HEADING_TYPE.H2} className={styles.profile_identification_form__heading}>
                        Загрузите скан паспорта
                    </Heading>
                    <div className={styles.profile_identification_form__files}>
                        <CommonFileUpload
                            onError={() =>
                                addMessage(ACTION_MESSAGE_TYPE.ERROR, "Не удалось загрузить разворот с фотографией")
                            }
                            onUploaded={() => {
                                return null;
                            }}
                        />
                        <CommonFileUpload
                            onError={() =>
                                addMessage(ACTION_MESSAGE_TYPE.ERROR, "Не удалось загрузить разворот с фотографией")
                            }
                            onUploaded={() => {
                                return null;
                            }}
                        />
                    </div>
                </div>
                <IdentificationPhone phoneResult={phoneResult} setPhoneResult={setPhoneResult} />
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN}>
                    <Button type="submit" disabled className={styles.profile_identification_form__submit}>
                        Подать заявку
                    </Button>
                </PrimaryButton>
            </form>
        </ProfileCommonBlock>
    );
};

export default ProfileIdentification;
