import styles from "./IdentificationPersonal.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import CommonInputBlock from "@/src/shared/ui/inputs/CommonInputBlock";
import CommonLabel from "@/src/shared/ui/typography/CommonLabel";
import CommonInput from "@/src/shared/ui/inputs/CommonInput";
import DateInput from "@/src/shared/ui/inputs/DateInput";
import { IdentificationPerson } from "@/src/entities/identification/model/composables";
import { Dispatch, SetStateAction } from "react";

type Props = {
    person: IdentificationPerson;
    setPerson: Dispatch<SetStateAction<IdentificationPerson>>;
};

const IdentificationPersonal = ({ person, setPerson }: Props) => {
    const setLastName = (lastName: string) => {
        setPerson(prev => {
            return {
                ...prev,
                lastName,
            };
        });
    };
    const setFirstName = (firstName: string) => {
        setPerson(prev => {
            return {
                ...prev,
                firstName,
            };
        });
    };
    const setMiddleName = (middleName: string) => {
        setPerson(prev => {
            return {
                ...prev,
                middleName,
            };
        });
    };
    const setBirthDay = (birthday: Date) => {
        setPerson(prev => {
            return {
                ...prev,
                birthday: birthday.toISOString(),
            };
        });
    };
    const setBirthPlace = (birthplace: string) => {
        setPerson(prev => {
            return {
                ...prev,
                birthplace,
            };
        });
    };
    return (
        <div className={styles.identification_personal}>
            <Heading headingType={HEADING_TYPE.H2} className={styles.identification_personal__heading}>
                Личные данные
            </Heading>
            <div className={styles.identification_personal__inputs}>
                <CommonInputBlock>
                    <CommonLabel htmlFor="lastname">Фамилия</CommonLabel>
                    <CommonInput id="lastname" value={person.lastName} onChange={setLastName}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="Иванов" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
                <CommonInputBlock>
                    <CommonLabel htmlFor="firstname">Имя</CommonLabel>
                    <CommonInput id="firstname" value={person.firstName} onChange={setFirstName}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="Иван" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
                <CommonInputBlock className={styles.identification_personal__full_input}>
                    <CommonLabel htmlFor="middlename">Отчество</CommonLabel>
                    <CommonInput id="middlename" value={person.middleName} onChange={setMiddleName}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="Иванович" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
                <CommonInputBlock>
                    <CommonLabel htmlFor="birthday">Дата рождения</CommonLabel>
                    <DateInput
                        id="birthday"
                        selected={person.birthday !== "" ? new Date(person.birthday) : null}
                        onChange={setBirthDay}
                    />
                </CommonInputBlock>
                <CommonInputBlock>
                    <CommonLabel htmlFor="birthPlace">Место рождения</CommonLabel>
                    <CommonInput id="birthPlace" value={person.birthplace} onChange={setBirthPlace}>
                        <CommonInput.Container>
                            <CommonInput.Input placeholder="Москва" />
                        </CommonInput.Container>
                    </CommonInput>
                </CommonInputBlock>
            </div>
        </div>
    );
};

export default IdentificationPersonal;
