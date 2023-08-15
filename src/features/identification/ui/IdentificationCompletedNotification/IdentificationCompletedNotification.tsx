import styles from "./IdentificationCompletedNotification.module.scss";
import telegramIcon from "@/public/images/social/telegram-icon.svg";
import { ProjectImage } from "@/src/shared/ui/images";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";
import { ProjectLink } from "@/src/shared/ui/links";

type Props = {
    onClick: () => void;
};

const IdentificationCompletedNotification = ({ onClick }: Props) => {
    return (
        <div className={styles.identification_completed_notification}>
            <ProjectImage
                src={telegramIcon}
                alt="Telegram image"
                width={117}
                height={114}
                className={styles.identification_completed_notification__image}
            />
            <div className={styles.identification_completed_notification__texts}>
                <Heading
                    headingType={HEADING_TYPE.H3}
                    className={styles.identification_completed_notification__heading}
                >
                    Ваша заявка отправлена
                </Heading>
                <p className={styles.identification_completed_notification__text}>
                    Обычно проверка занимает от 1 до 3 рабочих дней. Мы пришлем вам уведомление на платформе, и письмо
                    на почту
                </p>
            </div>
            <div className={styles.identification_completed_notification__actions}>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} wide>
                    <Button onClick={onClick}>Хорошо</Button>
                </PrimaryButton>
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.WHITE} wide>
                    <ProjectLink href="/market/secondary">Перейти на вторичный рынок</ProjectLink>
                </PrimaryButton>
            </div>
        </div>
    );
};

export default IdentificationCompletedNotification;
