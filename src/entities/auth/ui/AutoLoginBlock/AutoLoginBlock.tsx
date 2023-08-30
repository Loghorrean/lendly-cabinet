import PageLoader from "@/src/shared/ui/loaders/PageLoader";
import { useEffect } from "react";
import { createAuthTokenManager } from "@/src/entities/auth/utils";
import { useAutoLogin } from "@/src/entities/auth/hooks";
import { useRouter } from "next/navigation";

type Props = {
    token: string;
};

const AutoLoginBlock = ({ token }: Props) => {
    const router = useRouter();
    const autoLogin = useAutoLogin();
    useEffect(() => {
        autoLogin.mutateAsync(
            {
                token: token as string,
            },
            {
                onSuccess: bearerToken => {
                    const tokenManager = createAuthTokenManager();
                    tokenManager!.create(bearerToken);
                    router.push("/dashboard");
                },
            }
        );
    }, []);
    return <PageLoader fixed />;
};

export default AutoLoginBlock;
