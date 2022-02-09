import { ResponseStatus } from './ResponseStatus';
import { Exclude, Expose } from 'class-transformer';

export class ResponseDto<T> {
    @Exclude() private readonly _statusCode: string;
    @Exclude() private readonly _message: string;
    @Exclude() private readonly _data: T;

    private constructor(status: ResponseStatus, message: string, data: T) {
        this._statusCode = ResponseStatus[status];
        this._message = message;
        this._data = data;
    }

    static OK(): ResponseDto<string> {
        return new ResponseDto<string>(ResponseStatus.OK, '', '');
    }

    static OK_WITH<T>(data: T): ResponseDto<T> {
        return new ResponseDto<T>(ResponseStatus.OK, '', data);
    }

    static ERROR(): ResponseDto<string> {
        return new ResponseDto<string>(ResponseStatus.SERVER_ERROR, '서버 에러가 발생했습니다.', '');
    }

    static ERROR_WITH(message: string, code: ResponseStatus = ResponseStatus.SERVER_ERROR): ResponseDto<string> {
        return new ResponseDto<string>(code, message, '');
    }

    static ERROR_WITH_DATA<T>(message: string, code: ResponseStatus = ResponseStatus.SERVER_ERROR, data: T): ResponseDto<T> {
        return new ResponseDto<T>(code, message, data);
    }

    @Expose()
    get statusCode(): string {
        return this._statusCode;
    }

    @Expose()
    get message(): string {
        return this._message;
    }

    @Expose()
    get data(): T {
        return this._data;
    }
}
