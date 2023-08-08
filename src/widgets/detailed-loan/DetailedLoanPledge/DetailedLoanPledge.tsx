import { ObjectValues } from "@/src/shared/utils";
import { useState } from "react";
import styles from "./DetailedLoanPledge.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import LoanPledgeDropdown from "@/src/features/loan/ui/LoanPledgeDropdown";
import AnchorPixel from "@/src/shared/ui/utils/AnchorPixel";
import { ProjectImage } from "@/src/shared/ui/images";
import mockCarPic from "@/public/images/project/mock-car-pic.webp";

const LOAN_PLEDGE_TAB = {
    LOAN: "LOAN",
    GUARANTEE: "GUARANTEE",
    OTHER: "OTHER",
} as const;

type LoanPledgeTab = ObjectValues<typeof LOAN_PLEDGE_TAB>;

const DetailedLoanPledge = () => {
    const [tab, setTab] = useState<LoanPledgeTab>(LOAN_PLEDGE_TAB.LOAN);
    return (
        <div className={styles.detailed_loan_pledge}>
            <aside className={styles.detailed_loan_pledge__aside}>
                <ul className={styles.detailed_loan_pledge__navigation}>
                    <li>
                        <a
                            href="#loan"
                            className={styles.detailed_loan_pledge__tab}
                            aria-current={tab === LOAN_PLEDGE_TAB.LOAN}
                            onClick={() => setTab(LOAN_PLEDGE_TAB.LOAN)}
                        >
                            Залог
                        </a>
                    </li>
                    <li>
                        <a
                            href="#guarantee"
                            className={styles.detailed_loan_pledge__tab}
                            aria-current={tab === LOAN_PLEDGE_TAB.GUARANTEE}
                            onClick={() => setTab(LOAN_PLEDGE_TAB.GUARANTEE)}
                        >
                            Поручительство
                        </a>
                    </li>
                    <li>
                        <a
                            href="#other"
                            className={styles.detailed_loan_pledge__tab}
                            aria-current={tab === LOAN_PLEDGE_TAB.OTHER}
                            onClick={() => setTab(LOAN_PLEDGE_TAB.OTHER)}
                        >
                            Иное обеспечение
                        </a>
                    </li>
                </ul>
            </aside>
            <CommonBlock as="section" className={styles.detailed_loan_pledge__content}>
                <div className={styles.detailed_loan_pledge__block}>
                    <AnchorPixel className={styles.detailed_loan_pledge__pixel} id="loan" />
                    <Heading headingType={HEADING_TYPE.H2} className={styles.detailed_loan_pledge__heading}>
                        Залог
                    </Heading>
                    <div className={styles.detailed_loan_pledge__loan_blocks}>
                        <LoanPledgeDropdown
                            heading="Залог #1"
                            text="Нежилое помещение общей площадью 1234 кв.м. и земельный участок площадью 2346 кв.м. расположенные по адресу Свердловская область, г. Нижний Тагил, ул. Максима Горького, д.1 строение 12"
                        >
                            <ul className={styles.detailed_loan_pledge__properties_list}>
                                <li className={styles.detailed_loan_pledge__properties_list_element}>
                                    <div className={styles.detailed_loan_pledge__properties_list_label}>
                                        Тип объекта
                                    </div>
                                    <div>Жилой дом на участке земли</div>
                                </li>
                                <li className={styles.detailed_loan_pledge__properties_list_element}>
                                    <div className={styles.detailed_loan_pledge__properties_list_label}>
                                        Место расположения объекта
                                    </div>
                                    <div>
                                        Свердловская область, г. Нижний Тагил, ул. Максима Горького, д.1 строение 12
                                    </div>
                                </li>
                                <li className={styles.detailed_loan_pledge__properties_list_element}>
                                    <div className={styles.detailed_loan_pledge__properties_list_label}>
                                        Площадь объекта
                                    </div>
                                    <div>3470 кв.м.</div>
                                </li>
                                <li className={styles.detailed_loan_pledge__properties_list_element}>
                                    <div className={styles.detailed_loan_pledge__properties_list_label}>
                                        Основание приобретения
                                    </div>
                                    <div>Свидетельство о регистрации права</div>
                                </li>
                                <li className={styles.detailed_loan_pledge__properties_list_element}>
                                    <div className={styles.detailed_loan_pledge__properties_list_label}>
                                        Дата приобретения
                                    </div>
                                    <div>12.05.2012</div>
                                </li>
                                <li className={styles.detailed_loan_pledge__properties_list_element}>
                                    <div className={styles.detailed_loan_pledge__properties_list_label}>
                                        Рыночная стоимость
                                    </div>
                                    <div>10 256 052 руб.</div>
                                </li>
                                <li className={styles.detailed_loan_pledge__properties_list_element}>
                                    <div className={styles.detailed_loan_pledge__properties_list_label}>
                                        LTV при целевой сумме
                                    </div>
                                    <div>50%</div>
                                </li>
                            </ul>
                        </LoanPledgeDropdown>
                        <LoanPledgeDropdown
                            heading="Залог #2"
                            text="Нежилое помещение общей площадью 1234 кв.м. и земельный участок площадью 2346 кв.м. расположенные по адресу Свердловская область, г. Нижний Тагил, ул. Максима Горького, д.1 строение 12"
                        >
                            <ul className={styles.detailed_loan_pledge__properties_list}>
                                <li className={styles.detailed_loan_pledge__properties_list_element}>
                                    <div className={styles.detailed_loan_pledge__properties_list_label}>
                                        Тип объекта
                                    </div>
                                    <div>Жилой дом на участке земли</div>
                                </li>
                                <li className={styles.detailed_loan_pledge__properties_list_element}>
                                    <div className={styles.detailed_loan_pledge__properties_list_label}>
                                        Место расположения объекта
                                    </div>
                                    <div>
                                        Свердловская область, г. Нижний Тагил, ул. Максима Горького, д.1 строение 12
                                    </div>
                                </li>
                                <li className={styles.detailed_loan_pledge__properties_list_element}>
                                    <div className={styles.detailed_loan_pledge__properties_list_label}>
                                        Площадь объекта
                                    </div>
                                    <div>3470 кв.м.</div>
                                </li>
                                <li className={styles.detailed_loan_pledge__properties_list_element}>
                                    <div className={styles.detailed_loan_pledge__properties_list_label}>
                                        Основание приобретения
                                    </div>
                                    <div>Свидетельство о регистрации права</div>
                                </li>
                                <li className={styles.detailed_loan_pledge__properties_list_element}>
                                    <div className={styles.detailed_loan_pledge__properties_list_label}>
                                        Дата приобретения
                                    </div>
                                    <div>12.05.2012</div>
                                </li>
                                <li className={styles.detailed_loan_pledge__properties_list_element}>
                                    <div className={styles.detailed_loan_pledge__properties_list_label}>
                                        Рыночная стоимость
                                    </div>
                                    <div>10 256 052 руб.</div>
                                </li>
                                <li className={styles.detailed_loan_pledge__properties_list_element}>
                                    <div className={styles.detailed_loan_pledge__properties_list_label}>
                                        LTV при целевой сумме
                                    </div>
                                    <div>50%</div>
                                </li>
                            </ul>
                        </LoanPledgeDropdown>
                    </div>
                </div>
                <div className={styles.detailed_loan_pledge__block}>
                    <AnchorPixel className={styles.detailed_loan_pledge__pixel} id="other" />
                    <Heading headingType={HEADING_TYPE.H2} className={styles.detailed_loan_pledge__heading}>
                        Иное обеспечение
                    </Heading>
                    <p className={styles.detailed_loan_pledge__text}>
                        Нежилое помещение общей площадью 1234 кв. м. и земельный участок площадью 2346 кв. м.
                        расположенные по адресу Свердловская область, г. Нижний Тагил, ул. Максима Горького, д. 1
                        строение 12
                    </p>
                    <ProjectImage
                        src={mockCarPic}
                        alt="Some car picture"
                        className={styles.detailed_loan_pledge__picture}
                        width={520}
                        height={325}
                    />
                </div>
                <div className={styles.detailed_loan_pledge__block}>
                    <AnchorPixel className={styles.detailed_loan_pledge__pixel} id="guarantee" />
                    <Heading headingType={HEADING_TYPE.H2} className={styles.detailed_loan_pledge__heading}>
                        Поручительство
                    </Heading>
                    <p className={styles.detailed_loan_pledge__text}>
                        Константинопольский Евро Долларович доля в объекте xx%
                    </p>
                </div>
            </CommonBlock>
        </div>
    );
};

export default DetailedLoanPledge;
