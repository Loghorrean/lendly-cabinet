"use client";

import { ReactElement } from "react";
import ProfileCommonBlock from "@/src/entities/profile/ui/ProfileCommonBlock";
import { USER_STATUS, UserStatus } from "@/src/entities/user";
import IndividualIdentification from "@/src/widgets/identification/IndividualIdentification";
import { useCurrentProfile } from "@/src/entities/profile/hooks";
import EntrepreneurIdentification from "@/src/widgets/identification/EntrepreneurIdentification";
import LegalEntityIdentification from "@/src/widgets/identification/LegalEntityIdentification";

const ProfileIdentification = () => {
    const profile = useCurrentProfile();
    const formsMap: Record<UserStatus, ReactElement> = {
        [USER_STATUS.INDIVIDUAL]: <IndividualIdentification />,
        [USER_STATUS.ENTREPRENEUR]: <EntrepreneurIdentification />,
        [USER_STATUS.LEGAL_ENTITY]: <LegalEntityIdentification />,
    };
    return <ProfileCommonBlock>{formsMap[profile.status]}</ProfileCommonBlock>;
};

export default ProfileIdentification;
