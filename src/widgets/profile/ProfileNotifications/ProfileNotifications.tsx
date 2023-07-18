"use client";

import styles from "./ProfileNotifications.module.scss";
import ProfileCommonBlock from "@/src/entities/profile/ui/ProfileCommonBlock";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import { Checkbox } from "@/src/shared/ui/form";
import { useToggle } from "@/src/shared/utils";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";

const ProfileNotifications = () => {
    const [systemToggled, toggleSystem] = useToggle();
    const [newsToggled, toggleNews] = useToggle();
    return (
        <ProfileCommonBlock>
            <Heading headingType={HEADING_TYPE.H2} className={styles.profile_notifications__heading}>
                Настройки уведомлений
            </Heading>
            <ul className={styles.profile_notifications__settings}>
                <li>
                    <Checkbox checked={systemToggled} onChange={toggleSystem}>
                        Системные уведомления (пополнение счета, вывод средств, инвестиция в проект и тд.)
                    </Checkbox>
                </li>
                <li>
                    <Checkbox checked={newsToggled} onChange={toggleNews}>
                        Новостные уведомления
                    </Checkbox>
                </li>
            </ul>
            <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN} wide>
                <Button disabled className={styles.profile_notifications__submit}>
                    Сохранить изменения
                </Button>
            </PrimaryButton>
        </ProfileCommonBlock>
    );
};

export default ProfileNotifications;
