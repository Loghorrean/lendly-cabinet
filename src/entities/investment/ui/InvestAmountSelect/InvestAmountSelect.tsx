import styles from "./InvestAmountSelect.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import CommonInputBlock from "@/src/shared/ui/blocks/CommonInputBlock";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import RangeSelect from "@/src/shared/ui/select/RangeSelect";
import { PropsWithChildren } from "react";

const InvestAmountSelect = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.invest_amount_select}>
            <Heading headingType={HEADING_TYPE.H3} className={styles.invest_amount_select__heading}>
                Ваша инвестиция
            </Heading>
            <CommonInputBlock>
                <CommonLabel>Введите сумму</CommonLabel>
                <RangeSelect />
            </CommonInputBlock>
            {children}
        </div>
    );
};

export default InvestAmountSelect;
