import React, { ForwardedRef, useState } from "react";
import CommonInput, { CommonInputProps } from "@/src/shared/ui/inputs/CommonInput/CommonInput";
import styles from "./SearchInput.module.scss";
import SearchIcon from "@/src/shared/ui/svg/common/SearchIcon";
import { cn, isNotEmpty } from "@/src/shared/utils";
import { CommonInputInputProps } from "@/src/shared/ui/inputs/CommonInput/composables/CommonInputInput/CommonInputInput";
import { CommonInputContainerProps } from "@/src/shared/ui/inputs/CommonInput/composables/CommonInputContainer/CommonInputContainer";

type Props = CommonInputProps & {
    buffered?: boolean;
    containerProps?: CommonInputContainerProps;
    inputProps?: CommonInputInputProps;
};

function SearchInput(
    { value, onChange, id, error, buffered = true, containerProps, inputProps }: Props,
    ref: ForwardedRef<HTMLInputElement>
) {
    const [buffer, setBuffer] = useState(value);
    const handleChange = (value: string) => {
        if (buffered) {
            setBuffer(value);
            return;
        }
        onChange && onChange(value);
    };
    const handleFocusLost = () => {
        if (buffered && isNotEmpty(onChange)) {
            onChange(buffer ?? "");
        }
    };
    return (
        <CommonInput value={buffered ? buffer : value} onChange={handleChange} error={error} id={id}>
            <CommonInput.Container className={cn(styles.search_input, containerProps?.className)}>
                <SearchIcon />
                <CommonInput.Input
                    ref={ref}
                    {...inputProps}
                    className={styles.search_input__input}
                    onBlur={handleFocusLost}
                />
            </CommonInput.Container>
        </CommonInput>
    );
}

export default React.forwardRef(SearchInput);
