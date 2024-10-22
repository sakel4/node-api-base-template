import { HttpStatusCode } from '../constants/constants';
import { BaseError } from './baseError';

export class Error404 extends BaseError {
    constructor(
        name: string,
        exactError: any,
        message = 'Not found.',
        statusCode = HttpStatusCode.NOT_FOUND

    ) {
        super(name, statusCode, message, exactError)
    }
}
