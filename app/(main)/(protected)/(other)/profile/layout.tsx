import { PropsWithChildren } from "react";
import ProfileMain from "@/src/widgets/profile/ProfileMain";

export default function ProfileLayout({ children }: PropsWithChildren) {
    return <ProfileMain>{children}</ProfileMain>;
}
