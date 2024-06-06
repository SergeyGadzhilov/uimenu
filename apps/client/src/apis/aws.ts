import {PostRequest, Result } from "./common";

export class UploadImageRequest {
    menu: string;
    image: File;
};

export class S3BucketImage {
    url: string;
}

export type UploadImageResponse = Result<S3BucketImage>;

async function GetUploadUrl(request: UploadImageRequest, token: string = null) : Promise<UploadImageResponse> {
    return await PostRequest<UploadImageRequest, S3BucketImage>("aws/upload", request, token);
}

export async function UploadImage(request: UploadImageRequest, token: string = null) : Promise<UploadImageResponse> {
    if (!request) return null;

    const response = await GetUploadUrl(request, token);
    if (!response.IsSuccess) {
        return response;
    }

    await fetch(response.Data.url, {
        method: "PUT",
        headers: {
            ContentType : "multipart/form-data"
        },
        body: request.image
    });

    response.Data.url = response.Data.url.split("?")[0];
    return response;
}