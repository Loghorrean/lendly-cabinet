import CommonTable from "@/src/shared/ui/blocks/CommonTable";
import styles from "./InvestmentDocument.module.scss";
import { cn, formatDate } from "@/src/shared/utils";
import PdfIcon from "@/src/entities/file/ui/PdfIcon";
import { Tooltip } from "@/src/shared/ui/utils";
import TooltipContent from "@/src/shared/ui/utils/Tooltip/composables/TooltipContent";
import { SVG_CONTAINER_SIZE } from "@/src/shared/ui/svg/SvgContainer/SvgContainer";

const InvestmentDocument = () => {
    return (
        <CommonTable.Row className={styles.investment_document}>
            <CommonTable.Cell className={cn(styles.investment_document__cell, styles.investment_document__date)}>
                {formatDate(new Date())}
            </CommonTable.Cell>
            <CommonTable.Cell className={cn(styles.investment_document__cell, styles.investment_document__investment)}>
                <div className={styles.investment_document__investment_top}>
                    <div className={styles.investment_document__type}>Заём</div>
                    <div className={styles.investment_document__id}>ID-332932-7666</div>
                </div>
                <div className={styles.investment_document__company}>ИП Константинопольский</div>
            </CommonTable.Cell>
            <CommonTable.Cell className={styles.investment_document__cell}>
                <div className={styles.investment_document__file}>
                    <Tooltip
                        tooltipContent={
                            <TooltipContent>
                                Агентское распоряжение на продажу инвестиции на вторичном рынке
                            </TooltipContent>
                        }
                    >
                        <PdfIcon size={SVG_CONTAINER_SIZE.SIZE_16} fill="#363637" />
                    </Tooltip>
                    <div className={styles.investment_document__file_name}>
                        Агентское распоряжение на продажу инвестиции на вторичном рынке
                    </div>
                </div>
            </CommonTable.Cell>
        </CommonTable.Row>
    );
};

export default InvestmentDocument;
