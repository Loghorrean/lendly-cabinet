import styles from "./MyLoanPaymentInvestment.module.scss";
import { LoanPaymentProjectInvestment } from "@/src/entities/my-investments/model";
import CommonTable from "@/src/shared/ui/blocks/CommonTable";
import { isValueEmpty, useDropdown, useToggle } from "@/src/shared/utils";

type Props = {
    investment: LoanPaymentProjectInvestment;
};

const MyLoanPaymentInvestment = ({ investment }: Props) => {
    const [active, toggle] = useToggle();
    const [ref, height] = useDropdown(active);
    const filledPercent = () => {
        return 64;
    };
    return <CommonTable.Row></CommonTable.Row>;
};

export default MyLoanPaymentInvestment;
