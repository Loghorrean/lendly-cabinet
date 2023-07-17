import { UploadedFile } from "@/src/entities/file/model";
import { File } from "@/src/shared/models/common/File";

export function createUploadedFileFromUrl(url: string): UploadedFile {
    const urlWithoutQuery = url.split("?").shift() || url;
    return {
        name: urlWithoutQuery.split("/").pop() || urlWithoutQuery,
        url: urlWithoutQuery,
        downloadLink: url,
    };
}

export function createUploadedFileFromFile({ name, url }: File): UploadedFile {
    return {
        name: name,
        url: url.split("?").shift() || url,
        downloadLink: url,
    };
}
