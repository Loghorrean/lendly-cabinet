import styles from "./MyFundraisingInvestment.module.scss";
import { cn, isValueEmpty, resultIf, useDropdown, useToggle } from "@/src/shared/utils";
import CommonTable from "@/src/shared/ui/blocks/CommonTable";
import CommonInvestmentTitle from "@/src/entities/investment/ui/CommonInvestmentTitle";
import { Money, Tooltip } from "@/src/shared/ui/utils";
import TooltipContent from "@/src/shared/ui/utils/Tooltip/composables/TooltipContent";
import QuestionBlock from "@/src/shared/ui/utils/QuestionBlock";
import dayjs from "dayjs";
import DropdownArrowBig from "@/src/shared/ui/svg/arrows/DropdownArrowBig";
import { FundraisingProjectInvestment } from "@/src/entities/my-investments/model";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import ProgressBar from "@/src/shared/ui/utils/ProgressBar";

type Props = {
    investment: FundraisingProjectInvestment;
};

const MyFundraisingInvestment = ({ investment }: Props) => {
    const [active, toggle] = useToggle();
    const [ref, height] = useDropdown(active);
    const filledPercent = () => {
        if (isValueEmpty(investment.project.investedSum)) {
            return 0;
        }
        return Math.floor(investment.investedSum.amount / investment.project.targetSum.amount);
    };
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
            <div className={styles.my_fundraising_investment__body} style={{ maxHeight: height }}>
                <div ref={ref}>
                    <div className={styles.my_fundraising_investment__content}>
                        <div className={styles.my_fundraising_investment__progress}>
                            <ProgressBar amount={filledPercent()} />
                        </div>
                        <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE}>
                            <Button className={styles.my_fundraising_investment__action}>Подробнее</Button>
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </CommonTable.Row>
    );
};

export default MyFundraisingInvestment;
