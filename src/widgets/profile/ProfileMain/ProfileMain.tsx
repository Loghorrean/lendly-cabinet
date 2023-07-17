import BreadCrumbs from "@/src/shared/ui/blocks/BreadCrumbs";
import styles from "./ProfileMain.module.scss";

const ProfileMain = () => {
    return (
        <div className={styles.profile_main}>
            <BreadCrumbs
                links={[
                    { href: "/dashboard", text: "Активы" },
                    { href: "/profile", text: "Аккаунт" },
                ]}
            />
        </div>
    );
};

export default ProfileMain;
