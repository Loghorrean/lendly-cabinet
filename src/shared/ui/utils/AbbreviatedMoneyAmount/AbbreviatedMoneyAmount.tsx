"use client";

type Props = {
    amount: number;
};

const AbbreviatedMoneyAmount = ({ amount }: Props) => {
    if (amount >= 1000 && amount <= 999999) {
        return <>{`${(amount / 1000).toFixed(2)} тыс.`}</>;
    }
    if (amount >= 1000000 && amount <= 999999999) {
        return <>{`${(amount / 1000000).toFixed(2)} млн.`}</>;
    }
    if (amount >= 1000000000 && amount <= 999999999999) {
        return <>{`${(amount / 1000000).toFixed(2)} млрд.`}</>;
    }
    console.warn(`Given amount ${amount} could not be rendered in abbreaviated format`);
    return <>{`${amount}`}</>;
};

export default AbbreviatedMoneyAmount;
