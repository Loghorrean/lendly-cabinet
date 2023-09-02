import { ObjectValues } from "@/src/shared/utils";

export const TRANSACTION_TYPE = {
    DEPOSIT: "deposit",
    INVESTMENT_REFUND: "investment_refund",
    INVESTMENT_CANCEL: "investment_cancel",
    LOAN: "loan",
    DIVIDEND_PRINCIPAL: "dividend_principal",
    DIVIDEND_INTEREST: "dividend_interest",
    DIVIDEND_PENALTY: "dividend_penalty",
    DIVIDEND_COMPENSATION: "dividend_compensation",
    GUARANTOR_INTEREST: "guarantor_interest",
    GUARANTOR_COMPENSATION: "guarantor_compensation",
    GUARANTOR_PENALTY: "guarantor_penalty",
    SALE: "sale",

    WITHDRAW: "withdraw",
    INVESTMENT: "investment",
    REPAYMENT_PRINCIPAL: "repayment_principal",
    REPAYMENT_INTEREST: "repayment_interest",
    REPAYMENT_PENALTY: "repayment_penalty",
    REPAYMENT_COMPENSATION: "repayment_compensation",
    PURCHASE: "purchase",

    LOAN_FEE: "loan_fee",
    PURCHASE_FEE: "purchase_fee",
    SALE_FEE: "sale_fee",
    DIVIDEND_INTEREST_FEE: "dividend_interest_fee",
    DIVIDEND_PENALTY_FEE: "dividend_penalty_fee",
    DIVIDEND_COMPENSATION_FEE: "dividend_compensation_fee",
    GUARANTOR_INTEREST_FEE: "guarantor_interest_fee",
    GUARANTOR_COMPENSATION_FEE: "guarantor_compensation_fee",
    GUARANTOR_PENALTY_FEE: "guarantor_penalty_fee",
    PROJECT_MANAGEMENT_FEE: "project_management_fee",
    WITHDRAW_FEE: "withdraw_fee",
} as const;

export type TransactionType = ObjectValues<typeof TRANSACTION_TYPE>;

const transactionTypeTranslations: Record<TransactionType, string> = {
    [TRANSACTION_TYPE.DEPOSIT]: "Депозит",
    [TRANSACTION_TYPE.INVESTMENT_REFUND]: "Возврат инвестиции",
    [TRANSACTION_TYPE.INVESTMENT_CANCEL]: "Отмена инвестиции",
    [TRANSACTION_TYPE.LOAN]: "Займ",
    [TRANSACTION_TYPE.DIVIDEND_PRINCIPAL]: "Дивиденды по осн. долгу",
    [TRANSACTION_TYPE.DIVIDEND_INTEREST]: "Выплата процентов",
    [TRANSACTION_TYPE.DIVIDEND_PENALTY]: "Выплата штраф. процентов",
    [TRANSACTION_TYPE.DIVIDEND_COMPENSATION]: "DIVIDEND COMPENSATION",
    [TRANSACTION_TYPE.GUARANTOR_INTEREST]: "GUARANTOR INTEREST",
    [TRANSACTION_TYPE.GUARANTOR_COMPENSATION]: "GUARANTOR_COMPENSATION",
    [TRANSACTION_TYPE.GUARANTOR_PENALTY]: "GUARANTOR_PENALTY",
    [TRANSACTION_TYPE.SALE]: "Продажа инвестиции",

    [TRANSACTION_TYPE.WITHDRAW]: "Вывод денег",
    [TRANSACTION_TYPE.INVESTMENT]: "Инвестирование",
    [TRANSACTION_TYPE.REPAYMENT_PRINCIPAL]: "REPAYMENT_PRINCIPAL",
    [TRANSACTION_TYPE.REPAYMENT_COMPENSATION]: "REPAYMENT_COMPENSATION",
    [TRANSACTION_TYPE.REPAYMENT_PENALTY]: "REPAYMENT_PENALTY",
    [TRANSACTION_TYPE.REPAYMENT_INTEREST]: "REPAYMENT_INTEREST",
    [TRANSACTION_TYPE.PURCHASE]: "Покупка",

    [TRANSACTION_TYPE.LOAN_FEE]: "Комиссия с займа",
    [TRANSACTION_TYPE.PURCHASE_FEE]: "Комиссия при покупке",
    [TRANSACTION_TYPE.SALE_FEE]: "Комиссия при продаже",
    [TRANSACTION_TYPE.DIVIDEND_INTEREST_FEE]: "DIVIDEND_INTEREST_FEE",
    [TRANSACTION_TYPE.DIVIDEND_PENALTY_FEE]: "DIVIDEND_PENALTY_FEE",
    [TRANSACTION_TYPE.DIVIDEND_COMPENSATION_FEE]: "DIVIDEND_COMPENSATION_FEE",
    [TRANSACTION_TYPE.GUARANTOR_INTEREST_FEE]: "GUARANTOR_INTEREST_FEE",
    [TRANSACTION_TYPE.GUARANTOR_PENALTY_FEE]: "GUARANTOR_PENALTY_FEE",
    [TRANSACTION_TYPE.GUARANTOR_COMPENSATION_FEE]: "GUARANTOR_COMPENSATION_FEE",
    [TRANSACTION_TYPE.WITHDRAW_FEE]: "Комиссия за вывод денег",
    [TRANSACTION_TYPE.PROJECT_MANAGEMENT_FEE]: "PROJECT_MANAGEMENT_FEE",
} as const;

export const translateTransactionType = (type: TransactionType) => {
    return transactionTypeTranslations[type];
};
