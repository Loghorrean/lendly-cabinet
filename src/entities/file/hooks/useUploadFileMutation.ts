import { createUploadManager } from "@/src/entities/file/api/di";
import { useMutation } from "@tanstack/react-query";
import { UploadedFile } from "@/src/entities/file/model";

const uploadFileFn = async ({ file }: { file: File }) => {
    const manager = await createUploadManager();
    return manager.uploadFile(file);
};

export const useUploadFileMutation = () => {
    return useMutation<UploadedFile, unknown, { file: File }>({
        mutationKey: ["uploadFile"],
        mutationFn: uploadFileFn,
    });
};
