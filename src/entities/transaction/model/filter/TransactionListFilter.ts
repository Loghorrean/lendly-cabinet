import { PaymentType, TransactionType } from "@/src/entities/transaction/model";

export interface TransactionListFilter {
    dateFrom?: string;
    dateTo?: string;
    paymentTypes?: Array<PaymentType>;
    transactionTypes?: Array<TransactionType>;
}
