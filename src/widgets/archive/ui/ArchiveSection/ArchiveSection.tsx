import styles from "./ArchiveSection.module.scss";
import CommonNavigation from "@/src/shared/ui/blocks/CommonNavigation";

const ArchiveSection = () => {
    return (
        <section className={styles.archive_section}>
            <CommonNavigation single heading="Архив проектов" />
        </section>
    );
};

export default ArchiveSection;
