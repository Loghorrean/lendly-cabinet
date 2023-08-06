import styles from "./ArchiveSection.module.scss";
import CommonNavigation from "@/src/shared/ui/blocks/CommonNavigation";
import ArchiveProjectsFilter from "@/src/features/archive/ui/ArchiveProjectsFilter";

const ArchiveSection = () => {
    return (
        <section className={styles.archive_section}>
            <CommonNavigation single heading="Архив проектов" />
            <ArchiveProjectsFilter />
        </section>
    );
};

export default ArchiveSection;
