import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./DetailedProjectInfo.module.scss";
import { PropsWithChildren } from "react";
import { ProjectLoan } from "@/src/entities/project/model/composables";

type Props = {
    loan: ProjectLoan;
};

const DetailedProjectInfo = ({ loan, children }: PropsWithChildren<Props>) => {
    return (
        <CommonBlock as="aside" className={styles.detailed_project_info}>
            <ul className={styles.detailed_project_info__list}>
                <li className={styles.detailed_project_info__element}>
                    <div className={styles.detailed_project_info__label}>Ставка:</div>
                    <div className={styles.detailed_project_info__value}>Фиксированная</div>
                </li>
                <li className={styles.detailed_project_info__element}>
                    <div className={styles.detailed_project_info__label}>Размер ставки:</div>
                    <div className={styles.detailed_project_info__value}>70% прибыли проекта</div>
                </li>
                <li className={styles.detailed_project_info__element}>
                    <div className={styles.detailed_project_info__label}>Объект:</div>
                    <div className={styles.detailed_project_info__value}>Складские помещения на земельном учатске</div>
                </li>
                <li className={styles.detailed_project_info__element}>
                    <div className={styles.detailed_project_info__label}>Регион:</div>
                    <div className={styles.detailed_project_info__value}>
                        Свердловская область, г.Каменск-Уральский, ул. Московская
                    </div>
                </li>
                <li className={styles.detailed_project_info__element}>
                    <div className={styles.detailed_project_info__label}>Срок:</div>
                    <div className={styles.detailed_project_info__value}>10 месяцев</div>
                </li>
                <li className={styles.detailed_project_info__element}>
                    <div className={styles.detailed_project_info__label}>LTV:</div>
                    <div className={styles.detailed_project_info__value}>40%</div>
                </li>
                <li className={styles.detailed_project_info__element}>
                    <div className={styles.detailed_project_info__label}>Управляющая компания</div>
                    <div className={styles.detailed_project_info__value}>ЛендлиИнвестПромБокс</div>
                </li>
                <li className={styles.detailed_project_info__element}>
                    <div className={styles.detailed_project_info__label}>Раунд</div>
                    <div className={styles.detailed_project_info__value}>8</div>
                </li>
            </ul>
            {children}
        </CommonBlock>
    );
};

export default DetailedProjectInfo;
