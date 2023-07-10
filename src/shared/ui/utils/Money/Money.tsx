import React, { AllHTMLAttributes, FC, useCallback, useMemo } from "react";
import styles from "./Money.module.scss";
import { Money as MoneyModel } from "@/src/shared/models/common";
import { cn, formatAmount, ObjectValues } from "@/src/shared/utils";
import CurrencySymbol from "@/src/shared/ui/utils/CurrencySymbol";

export const MONEY_MODE = {
    INCOMING: "INCOMING",
    OUTGOING: "OUTGOING",
} as const;

export type MoneyMode = ObjectValues<typeof MONEY_MODE>;

interface Props extends AllHTMLAttributes<HTMLSpanElement> {
    money: MoneyModel;
    separator?: string;
    withPennies?: boolean;
    withCurrency?: boolean;
    moneyMode?: MoneyMode;
}

const Money: FC<Props> = ({
    money,
    separator = ",",
    withPennies = false,
    withCurrency = true,
    moneyMode,
    ...props
}) => {
    const [main, pennies] = useMemo(() => {
        const formatted = formatAmount(money.amount / 100, { thousandsDelimiter: ".", decimalDelimiter: "," });
        return formatted.split(separator);
    }, [money, separator]);

    const renderMoneyMode = useCallback((mode: MoneyMode) => {
        if (mode === MONEY_MODE.INCOMING) {
            return "+";
        }
        if (mode === MONEY_MODE.OUTGOING) {
            return "-";
        }
        return "";
    }, []);
    return (
        <span {...props} className={cn(styles.money, props.className)}>
            {moneyMode && renderMoneyMode(moneyMode)}
            <>
                <span className={styles.money__main}>{main}</span>
                {withPennies && <span>,{pennies}</span>}
            </>
            {withCurrency && (
                <span>
                    &nbsp;
                    <CurrencySymbol currencyCode={money.currencyCode} />
                </span>
            )}
        </span>
    );
};

export default Money;
