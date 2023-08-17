import { Money } from "@/src/shared/models/common";
import { PaymentType, TransactionStatus } from "@/src/entities/transaction/model/enum";

export interface Transaction {
    uuid: string;
    date: string;
    money: Money;
    paymentType: PaymentType;
    status: TransactionStatus;
}
