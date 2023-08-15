import CommonInputBlock from "@/src/shared/ui/inputs/CommonInputBlock";
import { IdentificationAgreements } from "@/src/entities/identification/model/composables";
import { Dispatch, SetStateAction } from "react";
import styles from "./IdentificationAgreements.module.scss";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import { Heading } from "@/src/shared/ui/typography";
import { Checkbox } from "@/src/shared/ui/form";

type Props = {
    agreements: IdentificationAgreements;
    setAgreements: Dispatch<SetStateAction<IdentificationAgreements>>;
};

const IdentificationAgreements = ({ agreements, setAgreements }: Props) => {
    const togglePersonalData = () => {
        setAgreements(prev => {
            return {
                ...prev,
                personalDataPolicy: !prev.personalDataPolicy,
            };
        });
    };
    const toggleContractTerms = () => {
        setAgreements(prev => {
            return {
                ...prev,
                userContractTerms: !prev.userContractTerms,
            };
        });
    };
    return (
        <div className={styles.identification_agreements}>
            <Heading headingType={HEADING_TYPE.H2} className={styles.identification_agreements__heading}>
                Соглашения
            </Heading>
            <div className={styles.identification_agreements__inputs}>
                <CommonInputBlock>
                    <Checkbox checked={agreements.personalDataPolicy} onChange={togglePersonalData}>
                        Согласен с политикой обработки данных
                    </Checkbox>
                </CommonInputBlock>
                <CommonInputBlock>
                    <Checkbox checked={agreements.userContractTerms} onChange={toggleContractTerms}>
                        Согласен с условиями контракта
                    </Checkbox>
                </CommonInputBlock>
            </div>
        </div>
    );
};

export default IdentificationAgreements;
