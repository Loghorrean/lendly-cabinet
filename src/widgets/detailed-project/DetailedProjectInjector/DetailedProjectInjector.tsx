"use client";

import { useGetDetailedProject } from "@/src/entities/project/hooks";
import PageLoader from "@/src/shared/ui/loaders/PageLoader";
import { isValueEmpty } from "@/src/shared/utils";
import { useActionMessages } from "@/src/shared/action-messages/store";
import { useRouter } from "next/navigation";
import { ACTION_MESSAGE_TYPE } from "@/src/shared/action-messages/model/ActionMessage";
import DetailedProjectBlock from "@/src/widgets/detailed-project/DetailedProjectBlock";

type Props = {
    uuid: string;
};

const DetailedProjectInjector = ({ uuid }: Props) => {
    const { addMessage } = useActionMessages();
    const router = useRouter();
    const { data, isLoading, isError } = useGetDetailedProject({ uuid });
    if (isLoading) {
        return <PageLoader fixed />;
    }
    if (isError || isValueEmpty(data)) {
        addMessage(ACTION_MESSAGE_TYPE.ERROR, "Проект не найден!");
        router.push("/market");
        return <></>;
    }
    return <DetailedProjectBlock project={data} />;
};

export default DetailedProjectInjector;
