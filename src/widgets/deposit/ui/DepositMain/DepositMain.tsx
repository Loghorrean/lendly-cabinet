import styles from "./DepositMain.module.scss";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import { Money } from "@/src/shared/ui/utils";
import DepositQr from "@/src/features/deposit/ui/DepositQr";
import { cn } from "@/src/shared/utils";

const DepositMain = () => {
    return (
        <CommonBlock large className={styles.deposit_main}>
            <div className={styles.deposit_main__block}>
                <Heading headingType={HEADING_TYPE.H2} className={styles.deposit_main__heading}>
                    Что такое номинальный банковский счёт?
                </Heading>
                <div className={cn(styles.deposit_main__text, styles.deposit_main__explanation)}>
                    Это счет‑посредник: с его помощью можно проводить операции с деньгами, права на которые принадлежат
                    не владельцу счета, а участникам сделки. Их называют бенефициарами. К примеру, сделки по
                    номинальному счету могут проходить так: Заказчик и исполнитель заключают сделку на вашей
                    интернет-площадке.
                </div>
            </div>
            <div className={styles.deposit_main__block}>
                <Heading headingType={HEADING_TYPE.H2} className={styles.deposit_main__heading}>
                    Данные счета
                </Heading>
                <ul className={styles.deposit_main__list}>
                    <li className={styles.deposit_main__element}>
                        <div className={styles.deposit_main__row_label}>Название</div>
                        <div>ООО &quot;Лендли&quot;</div>
                    </li>
                    <li className={styles.deposit_main__element}>
                        <div className={styles.deposit_main__row_label}>ИНН</div>
                        <div>7814733360</div>
                    </li>
                    <li className={styles.deposit_main__element}>
                        <div className={styles.deposit_main__row_label}>КПП</div>
                        <div>781401001</div>
                    </li>
                    <li className={styles.deposit_main__element}>
                        <div className={styles.deposit_main__row_label}>Номер счета</div>
                        <div>40701810903500000173</div>
                    </li>
                    <li className={styles.deposit_main__element}>
                        <div className={styles.deposit_main__row_label}>Банк</div>
                        <div>Филиал Точка Публичного акционерного общества банка “Финансовая корпорация Открытие”</div>
                    </li>
                    <li className={styles.deposit_main__element}>
                        <div className={styles.deposit_main__row_label}>БИК</div>
                        <div>044525999</div>
                    </li>
                    <li className={styles.deposit_main__element}>
                        <div className={styles.deposit_main__row_label}>Кор. счет</div>
                        <div>30101810845250000999</div>
                    </li>
                </ul>
            </div>
            <div className={styles.deposit_main__block}>
                <Heading headingType={HEADING_TYPE.H2} className={styles.deposit_main__heading}>
                    Лимиты
                </Heading>
                <div>
                    <div className={styles.deposit_main__minimum}>
                        <Heading headingType={HEADING_TYPE.H3} className={styles.deposit_main__row_heading}>
                            Минимальная сумма
                        </Heading>
                        <Money money={{ amount: 1000000, currencyCode: "RUB" }} />
                    </div>
                    <div className={styles.deposit_main__maximum}>
                        <Heading headingType={HEADING_TYPE.H3} className={styles.deposit_main__row_heading}>
                            Максимальная сумма
                        </Heading>
                    </div>
                    <ul className={styles.deposit_main__list}>
                        <li className={styles.deposit_main__element}>
                            <div className={styles.deposit_main__row_label}>Физические лица</div>
                            <Money money={{ amount: 60000000, currencyCode: "RUB" }} />
                        </li>
                        <li className={styles.deposit_main__element}>
                            <div className={styles.deposit_main__row_label}>
                                Физические лица, являющиеся квалифицированными инвесторами
                            </div>
                            <span>Без ограничений</span>
                        </li>
                        <li className={styles.deposit_main__element}>
                            <div className={styles.deposit_main__row_label}>Индивидуальные предприниматели</div>
                            <span>Без ограничений</span>
                        </li>
                        <li className={styles.deposit_main__element}>
                            <div className={styles.deposit_main__row_label}>Юридические лица</div>
                            <span>Без ограничений</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.deposit_main__block}>
                <Heading headingType={HEADING_TYPE.H2} className={styles.deposit_main__heading}>
                    Пополнение по QR-коду
                </Heading>
                <DepositQr />
            </div>
        </CommonBlock>
    );
};

export default DepositMain;
