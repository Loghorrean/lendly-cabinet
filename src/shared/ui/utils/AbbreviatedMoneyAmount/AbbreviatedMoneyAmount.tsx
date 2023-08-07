"use client";

type Props = {
    amount: number;
};

const AbbreviatedMoneyAmount = ({ amount }: Props) => {
    if (amount >= 1000 && amount <= 999999) {
        return <>{`${amount / 1000} тыс.`}</>;
    }
    if (amount >= 1000000 && amount <= 999999999) {
        return <>{`${amount / 1000000} млн.`}</>;
    }
    if (amount >= 1000000000 && amount <= 999999999999) {
        return <>{`${amount / 1000000} млрд.`}</>;
    }
    console.warn(`Given amount ${amount} could not be rendered in abbreaviated format`);
    return <></>;
};

export default AbbreviatedMoneyAmount;
