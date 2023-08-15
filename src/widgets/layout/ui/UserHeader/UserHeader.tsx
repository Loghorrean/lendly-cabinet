import Header from "@/src/shared/ui/layout/Header";
import styles from "./UserHeader.module.scss";
import { Money } from "@/src/shared/ui/utils";
import PrimaryButton from "@/src/shared/ui/buttons/decorators/PrimaryButton";
import { ProjectLink } from "@/src/shared/ui/links";
import { PRIMARY_BUTTON_COLOR } from "@/src/shared/ui/buttons/decorators/PrimaryButton/PrimaryButton";
import NotificationsIcon from "@/src/shared/ui/svg/user/NotificationsIcon";
import { useGetProfileQuery } from "@/src/entities/profile/hooks";
import Loader from "@/src/shared/ui/loaders/Loader";
import { isNotEmpty } from "@/src/shared/utils";
import ProfileMenu from "@/src/entities/profile/ui/ProfileMenu";

const UserHeader = () => {
    const { isLoading, data } = useGetProfileQuery();
    return (
        <Header>
            {isLoading ? (
                <Loader />
            ) : (
                isNotEmpty(data) && (
                    <div className={styles.user_header}>
                        <div className={styles.user_header__money}>
                            <div className={styles.user_header__balance}>
                                <span className={styles.user_header__available}>Доступно:</span>
                                <Money money={data.balance} />
                            </div>
                            <PrimaryButton color={PRIMARY_BUTTON_COLOR.GREEN}>
                                <ProjectLink href="/deposit">Пополнить</ProjectLink>
                            </PrimaryButton>
                        </div>
                        <div className={styles.user_header__actions}>
                            <ProjectLink
                                href="/profile#profile-notifications"
                                className={styles.user_header__notifications}
                            >
                                <NotificationsIcon />
                            </ProjectLink>
                            <ProfileMenu />
                        </div>
                    </div>
                )
            )}
        </Header>
    );
};

export default UserHeader;
