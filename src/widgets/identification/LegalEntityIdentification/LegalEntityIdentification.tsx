import styles from "./LegalEntityIdentification.module.scss";
import { SyntheticEvent } from "react";

const LegalEntityIdentification = () => {
    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
    };
    return <form onSubmit={handleSubmit} className={styles.legal_entity_identification}></form>;
};

export default LegalEntityIdentification;
