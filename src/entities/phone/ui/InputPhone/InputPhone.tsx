import styles from "./InputPhone.module.scss";
import { FC, SyntheticEvent, useMemo, useRef } from "react";
import ReactInputMask from "react-input-mask";
import InputPhoneArrow from "@/src/shared/ui/svg/arrows/InputPhoneArrow";
import { cn, resultIf } from "@/src/shared/utils";
import { Phone } from "@/src/entities/phone/models";

type Props = {
    phone: Phone;
    setPhone: (phone: Phone) => void;
    error?: boolean;
};

const InputPhone = ({ phone, setPhone }: Props) => {
    const handleNumber = (number: string) => {
        setPhone({ countryCode: phone.countryCode, number });
    };
    return (
        <div className={styles.input_phone}>
            <ReactInputMask
                placeholder="000 000000"
                mask="(999) 999-99-99"
                className={styles.input_phone__input}
                value={phone.number}
                onChange={(event: SyntheticEvent) => handleNumber((event.target as HTMLInputElement).value)}
            />
        </div>
    );
};

export default InputPhone;
