import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import styles from "./QualifiedInvestorRequirement.module.scss";
import telegramImage from "@/public/images/social/telegram-image.png";
import { ProjectImage } from "@/src/shared/ui/images";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { ProjectLink } from "@/src/shared/ui/links";
import PrimaryButtonArrow from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow";
import { PRIMARY_BUTTON_ARROW_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButtonArrow/PrimaryButtonArrow";

const QualifiedInvestorRequirement = () => {
    return (
        <CommonBlock className={styles.qualified_investor_requirement}>
            <div className={styles.qualified_investor_requirement__container}>
                <ProjectImage src={telegramImage} alt="Telegram image" width={124} height={116} />
                <Heading headingType={HEADING_TYPE.H3} className={styles.qualified_investor_requirement__heading}>
                    Заполните заявку на получение статуса квалифицированного инвестора
                </Heading>
                <p className={styles.qualified_investor_requirement__text}>
                    <span>
                        В соответствии с Правилами платформы Lendly инвестирование на первичном рынке доступно дл ИП,
                        ЮЛ, и квалифицированных инвесторов. Для инвестирования необходимо заполнить все данные,
                        предоставить доверенность, и отправить запрос на
                    </span>
                    <a className={styles.qualified_investor_requirement__link} href="mailto:support@lendly.ru">
                        support@lendly.ru
                    </a>
                </p>
                <PrimaryButton arrow color={PRIMARY_BUTTON_COLOR.GREEN}>
                    <ProjectLink href="/contact-us" className={styles.qualified_investor_requirement__submit}>
                        <span>Отправить заявку</span>
                        <PrimaryButtonArrow color={PRIMARY_BUTTON_ARROW_COLOR.WHITE} />
                    </ProjectLink>
                </PrimaryButton>
            </div>
        </CommonBlock>
    );
};

export default QualifiedInvestorRequirement;
