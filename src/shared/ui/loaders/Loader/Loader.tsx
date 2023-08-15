"use client";

import React from "react";
import styles from "./Loader.module.scss";
import LoadingIcon from "@/src/shared/ui/svg/loading/LoadingIcon";
import { resultIf } from "@/src/shared/utils";

type Props = {
    dark?: boolean;
    green?: boolean;
};

const Loader = ({ dark, green }: Props) => {
    const fillColor = () => {
        if (dark) {
            return "#000";
        }
        if (green) {
            return "#05b768";
        }
        return "#fff";
    };
    return (
        <div className={styles.loader}>
            <LoadingIcon fill={fillColor()} />
        </div>
    );
};

export default Loader;
