import styles from "./IdentificationPhone.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import CommonInputBlock from "@/src/shared/ui/inputs/CommonInputBlock";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import InputPhone from "@/src/entities/phone/ui/InputPhone";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import { useState } from "react";
import { Phone, PhoneResult } from "@/src/entities/phone/models";
import { useAddPhoneMutation } from "@/src/entities/profile/hooks/useAddPhoneMutation";
import { useVerifyPhoneMutation } from "@/src/entities/profile/hooks/useVerifyPhoneMutation";
import { useCurrentProfile } from "@/src/entities/profile/hooks";
import { useQueryClient } from "@tanstack/react-query";
import Loader from "@/src/shared/ui/loaders/Loader";

type Props = {
    phoneResult: PhoneResult;
    setPhoneResult: (phone: PhoneResult) => void;
};

const IdentificationPhone = ({ phoneResult, setPhoneResult }: Props) => {
    const client = useQueryClient();
    const profile = useCurrentProfile();
    const [code, setCode] = useState("");
    const [codeSentToPhone, setCodeSentToPhone] = useState(false);
    const setPhone = (phone: Phone) => {
        setPhoneResult({
            phone,
            phoneVerified: false,
        });
        setCodeSentToPhone(false);
    };
    const addPhoneAndSendSmsCode = useAddPhoneMutation();
    const verifyPhone = useVerifyPhoneMutation();
    //TODO: ADD CACHE PROFILE SETTING
    const handleSendPhone = async () => {
        await addPhoneAndSendSmsCode.mutateAsync(
            {
                phone: phoneResult.phone,
            },
            {
                onSuccess: data => {
                    setPhoneResult(data);
                    setCodeSentToPhone(true);
                    client.setQueryData(["profile"], {
                        ...profile,
                        phone: phoneResult.phone,
                        phoneVerified: phoneResult.phoneVerified,
                    });
                },
            }
        );
    };
    //TODO: ADD CACHE PROFILE SETTING
    const handleVerifyPhone = async () => {
        await verifyPhone.mutateAsync(
            {
                phone: phoneResult.phone,
                verificationCode: code,
            },
            {
                onSuccess: () => {
                    setPhoneResult({
                        phone: phoneResult.phone,
                        phoneVerified: true,
                    });
                    client.setQueryData(["profile"], {
                        ...profile,
                        phone: phoneResult.phone,
                        phoneVerified: true,
                    });
                },
            }
        );
    };
    return (
        <div className={styles.identification_phone}>
            <Heading headingType={HEADING_TYPE.H2} className={styles.identification_phone__heading}>
                Подтверждение номера телефона
            </Heading>
            <div className={styles.identification_phone__phone}>
                <CommonInputBlock className={styles.identification_phone__phone_block}>
                    <CommonLabel htmlFor="phone">Введите ваш номер телефона</CommonLabel>
                    <InputPhone phone={phoneResult.phone} setPhone={setPhone} />
                </CommonInputBlock>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN}>
                    <Button
                        className={styles.identification_phone__phone_submit}
                        onClick={handleSendPhone}
                        type="button"
                    >
                        {addPhoneAndSendSmsCode.isLoading ? <Loader /> : "Получить код"}
                    </Button>
                </PrimaryButton>
            </div>
            <div className={styles.identification_phone__code}>
                <CommonInputBlock>
                    <CommonLabel htmlFor="code">Введите код</CommonLabel>
                    <CommonInput id="code" value={code} onChange={setCode}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="000000" mask="999999" disabled={!codeSentToPhone} />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN}>
                    <Button
                        disabled={!codeSentToPhone}
                        className={styles.identification_phone__phone_submit}
                        onClick={handleVerifyPhone}
                        type="button"
                    >
                        {verifyPhone.isLoading ? <Loader /> : "Подтвердить"}
                    </Button>
                </PrimaryButton>
            </div>
        </div>
    );
};

export default IdentificationPhone;
