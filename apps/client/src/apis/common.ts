export class Error {
    private _code: Number = 0;
    private _message: string[] = [];

    constructor(code: Number, message: string[]) {
        this._code = code;
        this._message = message;
    }

    get IsUnauthorized() {
        return this._code == 401;
    }

    get Code() {
        return this._code;
    }

    get Message() {
        return this._message;
    }
}

export class Result<TData> {
    private _error: Error = null;
    private _data: TData = null;

    get IsSuccess() {
        return this._data != null;
    }

    get Data() {
        return this._data;
    }

    set Data(data: TData) {
        this._data = data;
    }

    set Error(error: Error) {
        this._error = error;
    }

    get Error() {
        return this._error;
    }

    static Success<TData>(data: TData) {
        const result = new Result<TData>();
        result.Data = data;
        return result;
    }

    static Error<TData>(status: Number, message: string[]) {
        const result = new Result<TData>();
        result.Error = new Error(status, message);
        return result;
    }
}

export async function GetRequest<TRequest, TResponse>(
    path: string = "",
    data: TRequest = null,
    token: string = ""
) : Promise<Result<TResponse>> {
    return await SendRequest(path, "GET", data, token);
}

export async function DeleteRequest<TRequest, TResponse>(
    path: string = "",
    data: TRequest = null,
    token: string = ""
) : Promise<Result<TResponse>> {
    return await SendRequest(path, "DELETE", data, token);
}

export async function PostRequest<TRequest, TResponse>(
    path: string = "",
    data: TRequest = null,
    token: string = ""
) : Promise<Result<TResponse>> {
    return await SendRequest(path, "POST", data, token);
}

export async function PatchRequest<TRequest, TResponse>(
    path: string = "",
    data: TRequest = null,
    token: string = ""
) : Promise<Result<TResponse>> {
    return await SendRequest(path, "PATCH", data, token);
}

async function SendRequest<TRequest, TResponse>(
    path: string = "",
    method: string = "POST",
    data: TRequest = null,
    token: string = "",
) : Promise<Result<TResponse>>
{
    const headers: Record<string, string> = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    };

    const response = await fetch(`/api/${path}`, {
        headers,
        method,
        body: data ? JSON.stringify(data) : null
    });

    return await processResponse<TResponse>(response);
}

async function processResponse<TResponse>(response: Response) : Promise<Result<TResponse>> {
    if (response == null) {
        return Result.Error(response.status, ["response is null"]);
    }

    const payload = await response.json();
    if (response.status == 201 || response.status == 200) {
        return Result.Success<TResponse>(payload);
    }

    if (response.status == 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

    if (Array.isArray(payload.message)) {
        return Result.Error(response.status, payload.message);
    }

    return Result.Error(response.status, [payload.message]);
}