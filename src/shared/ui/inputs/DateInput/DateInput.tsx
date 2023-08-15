import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import styles from "./DateInput.module.scss";
import { useRef } from "react";

const DateInput = ({ selected, onChange }: ReactDatePickerProps) => {
    const inputRef = useRef(null);
    const handleFocus = () => {
        (inputRef.current as any).handleFocus();
    };
    return (
        <div className={styles.date_input_container} onClick={handleFocus}>
            <ReactDatePicker
                ref={inputRef}
                onChange={onChange}
                selected={selected}
                className={styles.date_input}
                placeholderText="ДД.ММ.ГГ"
                shouldCloseOnSelect
            />
        </div>
    );
};

export default DateInput;
