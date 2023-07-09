"use client";

import React, { FC } from "react";
import { Translation } from "@/src/shared/models/common/Translation";

interface Props {
    translations: Array<Translation>;
}

const DynamicTranslation: FC<Props> = ({ translations }) => {
    return <>{translations[0].text}</>;
};

export default DynamicTranslation;
