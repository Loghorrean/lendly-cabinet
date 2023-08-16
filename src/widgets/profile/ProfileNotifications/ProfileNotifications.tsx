"use client";

import styles from "./ProfileNotifications.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import { Checkbox } from "@/src/shared/ui/form";
import { useToggle } from "@/src/shared/utils";
import { NotificationSettings } from "@/src/entities/notification/model";
import { useGetNotificationSettings, useUpdateNotificationSettings } from "@/src/entities/notification/hooks";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import { Button } from "@/src/shared/ui/buttons";
import Loader from "@/src/shared/ui/loaders/Loader";
import { useQueryClient } from "@tanstack/react-query";

type Props = {
    initialNotifications: NotificationSettings;
};

const ProfileNotifications = ({ initialNotifications }: Props) => {
    const client = useQueryClient();
    const { data } = useGetNotificationSettings();
    const updateNotifications = useUpdateNotificationSettings();
    const [systemToggled, toggleSystem] = useToggle(initialNotifications.mailSettings.systemNotifications);
    const [newsToggled, toggleNews] = useToggle(initialNotifications.mailSettings.newsletters);
    const hasChanged = () => {
        return (
            data?.mailSettings.systemNotifications !== systemToggled || data.mailSettings.newsletters !== newsToggled
        );
    };
    //TODO: ADD CACHE UPDATE
    const handleClick = async () => {
        await updateNotifications.mutateAsync(
            {
                mailSettings: {
                    systemNotifications: systemToggled,
                    newsletters: newsToggled,
                },
            },
            {
                onSuccess: () => {
                    const data = client.getQueryData(["notification-settings"]) as unknown as NotificationSettings;
                    client.setQueryData(["notification-settings"], {
                        ...data,
                        mailSettings: {
                            systemNotifications: systemToggled,
                            newsletters: newsToggled,
                        },
                    });
                },
            }
        );
    };
    return (
        <div className={styles.profile_notifications} id="profile-notifications">
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
            {hasChanged() && (
                <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN}>
                    <Button onClick={handleClick}>
                        {updateNotifications.isLoading ? <Loader /> : "Обновить параметры"}
                    </Button>
                </PrimaryButton>
            )}
        </div>
    );
};

export default ProfileNotifications;
