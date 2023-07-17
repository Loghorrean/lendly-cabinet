import { useRouter } from "next/navigation";

export const useRedirectBack = () => {
    const router = useRouter();
    return () => {
        router.back();
    };
};
