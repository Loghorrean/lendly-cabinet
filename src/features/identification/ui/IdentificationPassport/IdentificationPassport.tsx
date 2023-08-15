import styles from "./IdentificationPassport.module.scss";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import { Heading } from "@/src/shared/ui/typography";
import CommonInputBlock from "@/src/shared/ui/inputs/CommonInputBlock";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import DateInput from "@/src/shared/ui/inputs/DateInput";
import { IdentificationPassport } from "@/src/entities/identification/model/composables";
import { Dispatch, SetStateAction } from "react";

type Props = {
    passport: IdentificationPassport;
    setPassport: Dispatch<SetStateAction<IdentificationPassport>>;
    inn: string;
    setInn: (address: string) => void;
};

const IdentificationPassport = ({ passport, setPassport, inn, setInn }: Props) => {
    const setSeriesNumber = (seriesNumber: string) => {
        const [series, number] = seriesNumber.split(" ");
        setPassport(prev => {
            return {
                ...prev,
                series,
                number,
            };
        });
    };
    const setIssuedWhen = (issuedWhen: Date) => {
        setPassport(prev => {
            return {
                ...prev,
                issuedDate: issuedWhen.toISOString(),
            };
        });
    };
    const setDepartmentCode = (code: string) => {
        setPassport(prev => {
            return {
                ...prev,
                departmentCode: code,
            };
        });
    };
    const setIssuedBy = (issuedBy: string) => {
        setPassport(prev => {
            return {
                ...prev,
                issuedBy,
            };
        });
    };
    return (
        <div className={styles.identification_passport}>
            <Heading headingType={HEADING_TYPE.H2} className={styles.identification_passport__heading}>
                Паспортные данные и ИНН
            </Heading>
            <div className={styles.identification_passport__block}>
                <CommonInputBlock>
                    <CommonLabel htmlFor="series">Номер и серия паспорта</CommonLabel>
                    <CommonInput id="series" value={`${passport.series} ${passport.number}`} onChange={setSeriesNumber}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="0000 000000" mask="9999 999999" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
                <CommonInputBlock>
                    <CommonLabel htmlFor="issued-when">Когда выдан</CommonLabel>
                    <DateInput
                        id="issued-when"
                        selected={passport.issuedDate !== "" ? new Date(passport.issuedDate) : null}
                        onChange={setIssuedWhen}
                    />
                </CommonInputBlock>
                <CommonInputBlock>
                    <CommonLabel htmlFor="department-code">Код подразделения</CommonLabel>
                    <CommonInput id="department-code" value={passport.departmentCode} onChange={setDepartmentCode}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="000-000" mask="999-999" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
                <CommonInputBlock className={styles.identification_passport__full_input}>
                    <CommonLabel htmlFor="issued-by">Кем выдан</CommonLabel>
                    <CommonInput id="issued-by" value={passport.issuedBy} onChange={setIssuedBy}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="УФМС" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
                <CommonInputBlock className={styles.identification_passport__full_input}>
                    <CommonLabel htmlFor="inn">Укажите ИНН</CommonLabel>
                    <CommonInput id="inn" value={inn} onChange={setInn}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="00000000000000000" mask="99999999999999999" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
            </div>
        </div>
    );
};

export default IdentificationPassport;
