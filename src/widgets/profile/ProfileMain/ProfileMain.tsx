import BreadCrumbs from "@/src/shared/ui/blocks/BreadCrumbs";
import styles from "./ProfileMain.module.scss";
import { Heading } from "@/src/shared/ui/typography";
import { HEADING_TYPE } from "@/src/shared/ui/typography/Heading/Heading";
import GoBackButton from "@/src/shared/ui/buttons/GoBackButton";

const ProfileMain = () => {
    return (
        <div className={styles.profile_main}>
            <BreadCrumbs
                links={[
                    { href: "/dashboard", text: "Активы" },
                    { href: "/profile", text: "Аккаунт" },
                ]}
            />
            <header className={styles.profile_main__header}>
                <div className={styles.profile_main__title}>
                    <GoBackButton />
                    <Heading headingType={HEADING_TYPE.H1} className={styles.profile_main__heading}>
                        Аккаунт пользователя
                    </Heading>
                </div>
                <p className={styles.profile_main__id}>ID 89345 905</p>
            </header>
        </div>
    );
};

export default ProfileMain;
