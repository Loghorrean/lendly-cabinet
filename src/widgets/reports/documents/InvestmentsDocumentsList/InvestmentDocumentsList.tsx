"use client";

import styles from "./InvestmentDocumentsList.module.scss";
import { useState } from "react";
import SearchInput from "@/src/shared/ui/inputs/SearchInput";
import Pagination from "@/src/shared/ui/pagination/ui/Pagination";
import CommonTable from "@/src/shared/ui/blocks/CommonTable";
import PaginationContent from "@/src/shared/ui/pagination/ui/composables/PaginationContent";
import InvestmentDocument from "@/src/widgets/reports/documents/InvestmentDocument";
import LoadMoreButton from "@/src/shared/ui/buttons/LoadMoreButton";
import DynamicPaginator from "@/src/shared/ui/pagination/ui/DynamicPaginator";

const InvestmentDocumentsList = () => {
    const [counterAgent, setCounterAgent] = useState("");
    return (
        <div className={styles.investment_documents_list}>
            <SearchInput
                value={counterAgent}
                onChange={setCounterAgent}
                id="counteragent-search"
                inputProps={{ placeholder: "Искать по контрагенту" }}
            />
            <Pagination loading={false} totalCount={15}>
                <CommonTable>
                    <CommonTable.Header className={styles.investment_documents_list__header}>
                        <div>Дата подписания</div>
                        <div>Инвестиция</div>
                        <div>Документ</div>
                    </CommonTable.Header>
                    <ul>
                        <InvestmentDocument />
                        <InvestmentDocument />
                        <InvestmentDocument />
                        <InvestmentDocument />
                        <InvestmentDocument />
                        <InvestmentDocument />
                    </ul>
                </CommonTable>
                <Pagination.Footer>
                    <LoadMoreButton loading={false} />
                    <DynamicPaginator />
                </Pagination.Footer>
            </Pagination>
        </div>
    );
};

export default InvestmentDocumentsList;
