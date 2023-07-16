"use client";

import styles from "./MyFundraisingInvestmentsList.module.scss";
import SearchInput from "@/src/shared/ui/inputs/SearchInput";
import { useState } from "react";
import { useEffectOnUpdate } from "@/src/shared/utils";

const MyFundraisingInvestmentsList = () => {
    const [search, setSearch] = useState("");
    useEffectOnUpdate(() => {
        console.log(search);
    }, [search]);
    return (
        <div className={styles.my_fundraising_investments}>
            <SearchInput
                value={search}
                onChange={setSearch}
                id="search"
                inputProps={{ placeholder: "Искать по номеру или названию" }}
            />
        </div>
    );
};

export default MyFundraisingInvestmentsList;
