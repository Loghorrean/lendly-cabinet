import styles from "./CommonTable.module.scss";
import { BlockProps, cn } from "@/src/shared/utils";
import CommonTableCell from "@/src/shared/ui/blocks/CommonTable/composables/CommonTableCell";
import CommonTableHeader from "@/src/shared/ui/blocks/CommonTable/composables/CommonTableHeader";
import CommonTableRow from "@/src/shared/ui/blocks/CommonTable/composables/CommonTableRow";
import CommonTableFooter from "@/src/shared/ui/blocks/CommonTable/composables/CommonTableFooter";

const CommonTable = ({ children, ...props }: BlockProps) => {
    return (
        <div {...props} className={cn(styles.common_table, props.className)}>
            {children}
        </div>
    );
};

CommonTable.Cell = CommonTableCell;
CommonTable.Header = CommonTableHeader;
CommonTable.Footer = CommonTableFooter;
CommonTable.Row = CommonTableRow;

export default CommonTable;
