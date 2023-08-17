import styles from "./MyFundraisingInvestment.module.scss";
import { cn, resultIf, useDropdown, useToggle } from "@/src/shared/utils";
import CommonTable from "@/src/shared/ui/blocks/CommonTable";
import CommonInvestmentTitle from "@/src/entities/investment/ui/CommonInvestmentTitle";
import { Money, Tooltip } from "@/src/shared/ui/utils";
import TooltipContent from "@/src/shared/ui/utils/Tooltip/composables/TooltipContent";
import QuestionBlock from "@/src/shared/ui/utils/QuestionBlock";
import dayjs from "dayjs";
import DropdownArrowBig from "@/src/shared/ui/svg/arrows/DropdownArrowBig";

const MyFundraisingInvestment = () => {
    const [active, toggle] = useToggle();
    const [ref, height] = useDropdown(active);
    return (
        <CommonTable.Row className={styles.my_fundraising_investment} onClick={toggle}>
            <div className={styles.my_fundraising_investment__inner}>
                <CommonInvestmentTitle
                    percentage={64}
                    types={["Проект"]}
                    title="ИП “Константинопольский”"
                    id="332932-7666"
                />
                <CommonTable.Cell className={styles.my_fundraising_investment__value}>
                    <Money money={{ amount: 30000000000, currencyCode: "RUB" }} />
                    <Tooltip tooltipContent={<TooltipContent>Размер участия</TooltipContent>}>
                        <QuestionBlock />
                    </Tooltip>
                </CommonTable.Cell>
                <CommonTable.Cell className={styles.my_fundraising_investment__value}>
                    {dayjs(new Date()).format("DD.MM.YYYY")}
                </CommonTable.Cell>
                <CommonTable.Cell className={styles.my_fundraising_investment__value}>
                    35 мес.
                    <Tooltip tooltipContent={<TooltipContent>Срок проекта</TooltipContent>}>
                        <QuestionBlock />
                    </Tooltip>
                </CommonTable.Cell>
                <CommonTable.Cell className={styles.my_fundraising_investment__value}>15 дн.</CommonTable.Cell>
                <CommonTable.Cell className={styles.my_fundraising_investment__value}>
                    Доход
                    <Tooltip tooltipContent={<TooltipContent>Ожидаемый доход</TooltipContent>}>
                        <QuestionBlock />
                    </Tooltip>
                </CommonTable.Cell>
                <div
                    className={cn(
                        styles.my_fundraising_investment__open,
                        resultIf(active, styles.my_fundraising_investment__open___active)
                    )}
                >
                    <DropdownArrowBig />
                </div>
            </div>
        </CommonTable.Row>
    );
};

export default MyFundraisingInvestment;
