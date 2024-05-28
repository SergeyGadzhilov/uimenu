export class Error {
    private _code: Number = 0;
    private _message: string[] = [];

    constructor(code: Number, message: string[]) {
        this._code = code;
        this._message = message;
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

export async function PostRequest<TRequest, TResponse>(
    path: string = "",
    data: TRequest = null
) : Promise<Result<TResponse>> {
    const headers: Record<string, string> = {
        Authorization: `Bearer `,
        "Content-Type": "application/json"
    };

    const response = await fetch(`/api/${path}`, {
        headers,
        method: "POST",
        body: JSON.stringify(data)
    });

    if (response == null) {
        return Result.Error(response.status, ["response is null"]);
    }

    const payload = await response.json();
    if (response.status == 201) {
        return Result.Success(payload);
    }

    return Result.Error(response.status, payload.message);
}