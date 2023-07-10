import { PropsWithChildren } from "react";

//TODO: ADD CHECKING FOR TOKEN
export default function ProtectedLayout({ children }: PropsWithChildren) {
    return <>{children}</>;
}
