import { Exclude, Expose } from 'class-transformer';
import { HttpStatus } from '@nestjs/common';

export class ResponseDto<T> {
    @Exclude() private readonly _statusCode: string;
    @Exclude() private readonly _message: string;
    @Exclude() private readonly _data: T;

    private constructor(status: HttpStatus, message: string, data: T) {
        this._statusCode = HttpStatus[status];
        this._message = message;
        this._data = data;
    }

    static OK(): ResponseDto<string> {
        return new ResponseDto<string>(HttpStatus.OK, '', '');
    }

    static OK_WITH<T>(data: T): ResponseDto<T> {
        return new ResponseDto<T>(HttpStatus.OK, '', data);
    }

    static ERROR(): ResponseDto<string> {
        return new ResponseDto<string>(HttpStatus.INTERNAL_SERVER_ERROR, '서버 에러가 발생했습니다.', '');
    }

    static ERROR_WITH(message: string, code: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR): ResponseDto<string> {
        return new ResponseDto<string>(code, message, '');
    }

    static ERROR_WITH_DATA<T>(message: string, code: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR, data: T): ResponseDto<T> {
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
