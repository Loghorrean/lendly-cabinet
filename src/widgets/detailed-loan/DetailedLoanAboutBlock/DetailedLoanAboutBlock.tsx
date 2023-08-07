import styles from "./DetailedLoanAboutBlock.module.scss";
import { useState } from "react";
import { cn, ObjectValues } from "@/src/shared/utils";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import RoundProgressBar from "@/src/shared/ui/utils/RoundProgressBar";
import { Money } from "@/src/shared/ui/utils";
import ShowMoreButton from "@/src/shared/ui/buttons/ShowMoreButton";
import CommonDocument from "@/src/shared/ui/blocks/CommonDocument";
import AnchorPixel from "@/src/shared/ui/utils/AnchorPixel";

const LOAN_ABOUT_TAB = {
    BORROWER: "BORROWER",
    GENERAL: "GENERAL",
    DISCLOSURE: "DISCLOSURE",
    FINANCES: "FINANCES",
    DOCUMENTS: "DOCUMENTS",
} as const;

type LoanAboutTab = ObjectValues<typeof LOAN_ABOUT_TAB>;

const DetailedLoanAboutBlock = () => {
    const [currentTab, setCurrentTab] = useState<LoanAboutTab>(LOAN_ABOUT_TAB.BORROWER);
    return (
        <div className={styles.detailed_loan_about_block}>
            <aside className={styles.detailed_loan_about_block__aside}>
                <ul className={styles.detailed_loan_about_block__navigation}>
                    <li>
                        <a
                            href="#borrower"
                            className={styles.detailed_loan_about_block__tab}
                            aria-current={currentTab === LOAN_ABOUT_TAB.BORROWER}
                            onClick={() => setCurrentTab(LOAN_ABOUT_TAB.BORROWER)}
                        >
                            Заемщик
                        </a>
                    </li>
                    <li>
                        <a
                            href="#general"
                            className={styles.detailed_loan_about_block__tab}
                            aria-current={currentTab === LOAN_ABOUT_TAB.GENERAL}
                            onClick={() => setCurrentTab(LOAN_ABOUT_TAB.GENERAL)}
                        >
                            Общая информация
                        </a>
                    </li>
                    <li>
                        <a
                            href="#disclosure"
                            className={styles.detailed_loan_about_block__tab}
                            aria-current={currentTab === LOAN_ABOUT_TAB.DISCLOSURE}
                            onClick={() => setCurrentTab(LOAN_ABOUT_TAB.DISCLOSURE)}
                        >
                            Сведения о существенных фактах, подлежащих раскрытию
                        </a>
                    </li>
                    <li>
                        <a
                            href="#finances"
                            className={styles.detailed_loan_about_block__tab}
                            aria-current={currentTab === LOAN_ABOUT_TAB.FINANCES}
                            onClick={() => setCurrentTab(LOAN_ABOUT_TAB.FINANCES)}
                        >
                            Финансовая информация по компании
                        </a>
                    </li>
                    <li>
                        <a
                            href="#documents"
                            className={styles.detailed_loan_about_block__tab}
                            aria-current={currentTab === LOAN_ABOUT_TAB.DOCUMENTS}
                            onClick={() => setCurrentTab(LOAN_ABOUT_TAB.DOCUMENTS)}
                        >
                            Документы
                        </a>
                    </li>
                </ul>
            </aside>
            <CommonBlock as="section" className={styles.detailed_loan_about_block__content}>
                <div className={styles.detailed_loan_about_block__block}>
                    <AnchorPixel className={styles.detailed_loan_about_block__pixel} id="borrower" />
                    <Heading headingType={HEADING_TYPE.H2} className={styles.detailed_loan_about_block__heading}>
                        Сведения о заемщике
                    </Heading>
                    <ul>
                        <li className={styles.detailed_loan_about_block__borrower}>
                            <div className={styles.detailed_loan_about_block__borrower_label}>ИНН</div>
                            <div className={styles.detailed_loan_about_block__borrower_value}>0123456789</div>
                        </li>
                        <li className={styles.detailed_loan_about_block__borrower}>
                            <div className={styles.detailed_loan_about_block__borrower_label}>ОГРН</div>
                            <div className={styles.detailed_loan_about_block__borrower_value}>1234567890123</div>
                        </li>
                        <li className={styles.detailed_loan_about_block__borrower}>
                            <div className={styles.detailed_loan_about_block__borrower_label}>Адрес регистрации:</div>
                            <div className={styles.detailed_loan_about_block__borrower_value}>
                                196006, г.Санкт-Петербург, вн.тер.г. муниципальный округ Московская Застава, ул. Коли
                                Томчака
                            </div>
                        </li>
                        <li className={styles.detailed_loan_about_block__borrower}>
                            <div className={styles.detailed_loan_about_block__borrower_label}>
                                Генеральный директор:
                            </div>
                            <div className={styles.detailed_loan_about_block__borrower_value}>
                                ХХХХХХХХХХ НАТАЛЬЯ ВЯЧЕСЛАВОВНА.
                            </div>
                        </li>
                        <li className={styles.detailed_loan_about_block__borrower}>
                            <div className={styles.detailed_loan_about_block__borrower_label}>Дата регистрации:</div>
                            <div className={styles.detailed_loan_about_block__borrower_value}>03.11.2022.</div>
                        </li>
                    </ul>
                    <div>
                        <Heading
                            headingType={HEADING_TYPE.H3}
                            className={styles.detailed_loan_about_block__third_heading}
                        >
                            Учредители
                        </Heading>
                        <div className={styles.detailed_loan_about_block__founders}>
                            <div className={styles.detailed_loan_about_block__founder}>
                                <RoundProgressBar amount={57} size={108} strokeWidth={3}>
                                    <text
                                        className={styles.detailed_loan_about_block__percent}
                                        x="50%"
                                        y="50%"
                                        dy="-0.1em"
                                        textAnchor="middle"
                                    >
                                        57%
                                    </text>
                                    <text
                                        className={styles.detailed_loan_about_block__percent_text}
                                        x="50%"
                                        y="50%"
                                        dy="1.25em"
                                        textAnchor="middle"
                                    >
                                        Доля
                                    </text>
                                </RoundProgressBar>
                                <div className={styles.detailed_loan_about_block__founder_name}>
                                    Никонорова Наталья Вячеславовна
                                </div>
                            </div>
                            <div className={styles.detailed_loan_about_block__founder}>
                                <RoundProgressBar amount={28} size={108} strokeWidth={3}>
                                    <text
                                        className={styles.detailed_loan_about_block__percent}
                                        x="50%"
                                        y="50%"
                                        dy="-0.1em"
                                        textAnchor="middle"
                                    >
                                        28%
                                    </text>
                                    <text
                                        className={styles.detailed_loan_about_block__percent_text}
                                        x="50%"
                                        y="50%"
                                        dy="1.25em"
                                        textAnchor="middle"
                                    >
                                        Доля
                                    </text>
                                </RoundProgressBar>
                                <div className={styles.detailed_loan_about_block__founder_name}>
                                    Никонорова Наталья Вячеславовна
                                </div>
                            </div>
                            <div className={styles.detailed_loan_about_block__founder}>
                                <RoundProgressBar amount={11} size={108} strokeWidth={3}>
                                    <text
                                        className={styles.detailed_loan_about_block__percent}
                                        x="50%"
                                        y="50%"
                                        dy="-0.1em"
                                        textAnchor="middle"
                                    >
                                        11%
                                    </text>
                                    <text
                                        className={styles.detailed_loan_about_block__percent_text}
                                        x="50%"
                                        y="50%"
                                        dy="1.25em"
                                        textAnchor="middle"
                                    >
                                        Доля
                                    </text>
                                </RoundProgressBar>
                                <div className={styles.detailed_loan_about_block__founder_name}>
                                    Никонорова Наталья Вячеславовна
                                </div>
                            </div>
                            <div className={styles.detailed_loan_about_block__founder}>
                                <RoundProgressBar amount={4} size={108} strokeWidth={3}>
                                    <text
                                        className={styles.detailed_loan_about_block__percent}
                                        x="50%"
                                        y="50%"
                                        dy="-0.1em"
                                        textAnchor="middle"
                                    >
                                        4%
                                    </text>
                                    <text
                                        className={styles.detailed_loan_about_block__percent_text}
                                        x="50%"
                                        y="50%"
                                        dy="1.25em"
                                        textAnchor="middle"
                                    >
                                        Доля
                                    </text>
                                </RoundProgressBar>
                                <div className={styles.detailed_loan_about_block__founder_name}>
                                    Никонорова Наталья Вячеславовна
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.detailed_loan_about_block__block}>
                    <AnchorPixel className={styles.detailed_loan_about_block__pixel} id="general" />
                    <Heading headingType={HEADING_TYPE.H2} className={styles.detailed_loan_about_block__heading}>
                        Общая информация
                    </Heading>
                    <div className={styles.detailed_loan_about_block__general_info}>
                        <div>Это первая заявка ООО Старт на платформе.</div>
                        <div>
                            Одновременно публикуются 2 заявки одного заемщика общей суммой 12 млн. рублей. В качестве
                            обеспечения выступают однородные по качеству объекты нежилой недвижимости. Каждая заявка
                            будет обеспечена отдельным договором ипотеки (общая рыночная стоимость всего
                            предоставленного обеспечения по всем заявкам составит — 29,9 млн. рублей). Дробление заявок
                            связано с удобством снятия обременения с объекта недвижимости после полного погашения займа.
                        </div>
                    </div>
                    <ShowMoreButton />
                </div>
                <div
                    className={cn(
                        styles.detailed_loan_about_block__block,
                        styles.detailed_loan_about_block__disclosure
                    )}
                >
                    <AnchorPixel className={styles.detailed_loan_about_block__pixel} id="disclosure" />
                    <Heading headingType={HEADING_TYPE.H2} className={styles.detailed_loan_about_block__heading}>
                        Сведения о существенных фактах, подлежащих раскрытию
                    </Heading>
                    <Heading headingType={HEADING_TYPE.H3} className={styles.detailed_loan_about_block__sub_heading}>
                        В данный проект будет инвестировать компания, аффилированная к учредителю платформы: ООО «Лендли
                        Инвест».
                    </Heading>
                    <p>
                        По договоренности между продавцом здания и текущим владельцем (заемщик), земельный участок под
                        зданием будет выделен и передан ООО «Старт», после завершения сдачи последнего корпуса в жилом
                        комплексе «Парнас». Ориентировочные сроки конец лета 2023 года.
                    </p>
                </div>
                <div className={styles.detailed_loan_about_block__block}>
                    <AnchorPixel className={styles.detailed_loan_about_block__pixel} id="finances" />
                    <Heading headingType={HEADING_TYPE.H2} className={styles.detailed_loan_about_block__heading}>
                        Финансовая информация по компании
                    </Heading>
                    <div className={styles.detailed_loan_about_block__finances}>
                        <div className={styles.detailed_loan_about_block__finance}>
                            <div className={styles.detailed_loan_about_block__finance_label}>Валюта баланса</div>
                            <div className={styles.detailed_loan_about_block__finance_value}>
                                <Money money={{ amount: 5773400000, currencyCode: "RUB" }} />
                            </div>
                        </div>
                        <div className={styles.detailed_loan_about_block__finance}>
                            <div className={styles.detailed_loan_about_block__finance_label}>Выручка</div>
                            <div className={styles.detailed_loan_about_block__finance_value}>
                                <Money money={{ amount: 5773400000, currencyCode: "RUB" }} />
                            </div>
                        </div>
                        <div className={styles.detailed_loan_about_block__finance}>
                            <div className={styles.detailed_loan_about_block__finance_label}>
                                Объем кредитных обязатнльств
                            </div>
                            <div className={styles.detailed_loan_about_block__finance_value}>
                                <Money money={{ amount: 5773400000, currencyCode: "RUB" }} />
                            </div>
                        </div>
                        <div className={styles.detailed_loan_about_block__finance}>
                            <div className={styles.detailed_loan_about_block__finance_label}>Чистая прибыль</div>
                            <div className={styles.detailed_loan_about_block__finance_value}>
                                <Money money={{ amount: 5773400000, currencyCode: "RUB" }} />
                            </div>
                        </div>
                        <div className={styles.detailed_loan_about_block__finance}>
                            <div className={styles.detailed_loan_about_block__finance_label}>
                                Объем кредитных обязательств
                            </div>
                            <div className={styles.detailed_loan_about_block__finance_value}>
                                <Money money={{ amount: 5773400000, currencyCode: "RUB" }} />
                            </div>
                        </div>
                        <div className={styles.detailed_loan_about_block__finance}>
                            <div className={styles.detailed_loan_about_block__finance_label}>Сотрудники</div>
                            <div className={styles.detailed_loan_about_block__finance_value}>4</div>
                        </div>
                        <div className={styles.detailed_loan_about_block__finance}>
                            <div className={styles.detailed_loan_about_block__finance_label}>Чистая прибыль</div>
                            <div className={styles.detailed_loan_about_block__finance_value}>
                                <Money money={{ amount: 5773400000, currencyCode: "RUB" }} />
                            </div>
                        </div>
                    </div>
                    <p className={styles.detailed_loan_about_block__finances_text}>
                        Выручка ООО «ХХХХХХ» за 2020 год составила 5 734 000 рублей. Деятельность прибыльна, объем ЧП —
                        912 000 рублей. Поступления на расчетный счет сопоставимы с заявленными объемами деятельности.
                        Долговая нагрузка в виде кредитов, займов и банковских гарантий по состоянию на 09.06.2021 года
                        — отсутствует (кредит, полученный компанией в 2018 году, в сумме, сопоставимой с суммой
                        публикуемого займа был погашен в 2020 г.). У заемщика отсутствуют просрочки по кредитам.
                        Качество кредитной истории у ООО «ЗЗЗЗЗЗЗ» и ХХХХХ. оценивается как хорошее.
                    </p>
                    <ShowMoreButton />
                </div>
                <div className={styles.detailed_loan_about_block__block}>
                    <AnchorPixel className={styles.detailed_loan_about_block__pixel} id="documents" />
                    <Heading headingType={HEADING_TYPE.H2} className={styles.detailed_loan_about_block__heading}>
                        Документы
                    </Heading>
                    <div className={styles.detailed_loan_about_block__documents}>
                        <CommonDocument link="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            Устав организации от 12.05.2022 г.
                        </CommonDocument>
                        <CommonDocument link="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            Устав организации от 12.05.2022 г.
                        </CommonDocument>
                        <CommonDocument link="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            Устав организации от 12.05.2022 г.
                        </CommonDocument>
                        <CommonDocument link="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            Устав организации от 12.05.2022 г.
                        </CommonDocument>
                        <CommonDocument link="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            Устав организации от 12.05.2022 г.
                        </CommonDocument>
                        <CommonDocument link="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            Устав организации от 12.05.2022 г.
                        </CommonDocument>
                        <CommonDocument link="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            Устав организации от 12.05.2022 г.
                        </CommonDocument>
                        <CommonDocument link="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            Устав организации от 12.05.2022 г.
                        </CommonDocument>
                    </div>
                </div>
            </CommonBlock>
        </div>
    );
};

export default DetailedLoanAboutBlock;
