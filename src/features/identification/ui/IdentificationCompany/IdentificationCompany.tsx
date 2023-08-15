import styles from "./IdentificationCompany.module.scss";
import { IdentificationCompany } from "@/src/entities/identification/model/composables";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import CommonInputBlock from "@/src/shared/ui/inputs/CommonInputBlock";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import { Dispatch, SetStateAction } from "react";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";

type Props = {
    company: IdentificationCompany;
    setCompany: Dispatch<SetStateAction<IdentificationCompany>>;
};

const IdentificationCompany = ({ company, setCompany }: Props) => {
    const setName = (name: string) => {
        setCompany(prev => {
            return {
                ...prev,
                name,
            };
        });
    };
    const setSiteUrl = (url: string) => {
        setCompany(prev => {
            return {
                ...prev,
                siteUrl: url,
            };
        });
    };
    const setInn = (inn: string) => {
        setCompany(prev => {
            return {
                ...prev,
                inn,
            };
        });
    };
    const setKpp = (kpp: string) => {
        setCompany(prev => {
            return {
                ...prev,
                kpp,
            };
        });
    };
    const setOgrnip = (ogrnip: string) => {
        setCompany(prev => {
            return {
                ...prev,
                ogrnip,
            };
        });
    };
    const setAddress = (address: string) => {
        setCompany(prev => {
            return {
                ...prev,
                address,
            };
        });
    };
    return (
        <div className={styles.identification_company}>
            <Heading headingType={HEADING_TYPE.H2} className={styles.identification_company__heading}>
                Данные компании
            </Heading>
            <div className={styles.identification_company__inputs}>
                <CommonInputBlock>
                    <CommonLabel htmlFor="name">Название</CommonLabel>
                    <CommonInput id="name" value={company.name} onChange={setName}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="ООО 'Яндекс'" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
                <CommonInputBlock>
                    <CommonLabel htmlFor="url">Название</CommonLabel>
                    <CommonInput id="url" value={company.siteUrl} onChange={setSiteUrl}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="https://youtube.com" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
                <CommonInputBlock className={styles.identification_company__full_input}>
                    <CommonLabel htmlFor="inn">ИНН</CommonLabel>
                    <CommonInput id="inn" value={company.inn} onChange={setInn}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="00000000000000000" mask="99999999999999999" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
                <CommonInputBlock>
                    <CommonLabel htmlFor="kpp">КПП</CommonLabel>
                    <CommonInput id="kpp" value={company.kpp} onChange={setKpp}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="000000000" mask="999999999" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
                <CommonInputBlock>
                    <CommonLabel htmlFor="ogrnip">ОГРНИП</CommonLabel>
                    <CommonInput id="ogrnip" value={company.ogrnip} onChange={setOgrnip}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="000000000000000" mask="999999999999999" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
                <CommonInputBlock className={styles.identification_company__full_input}>
                    <CommonLabel htmlFor="address">Адрес</CommonLabel>
                    <CommonInput id="address" value={company.address} onChange={setAddress}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="г. Москва" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
            </div>
        </div>
    );
};

export default IdentificationCompany;
