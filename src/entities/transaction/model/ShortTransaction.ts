import { Money } from "@/src/shared/models/common";
import { PaymentType, TransactionType } from "@/src/entities/transaction/model/enum";

export interface ShortTransaction {
    uuid: string;
    money: Money;
    paymentType: PaymentType;
    transactionType: TransactionType;
}
