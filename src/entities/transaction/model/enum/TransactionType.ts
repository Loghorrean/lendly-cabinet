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
