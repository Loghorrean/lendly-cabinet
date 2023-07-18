import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import styles from "./DateInput.module.scss";

const DateInput = ({ selected, onChange }: ReactDatePickerProps) => {
    return (
        <div className={styles.date_input_container}>
            <ReactDatePicker
                onChange={onChange}
                selected={selected}
                className={styles.date_input}
                placeholderText="ДД.ММ.ГГ"
            />
        </div>
    );
};

export default DateInput;
