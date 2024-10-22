import { HttpStatusCode } from '../constants/constants';
import { BaseError } from './baseError';

export class Error401 extends BaseError {
    constructor(
        name: string,
        exactError: any,
        message = 'Unoauthorized',
        statusCode = HttpStatusCode.UNAUTHORIZED,
    ) {
        super(name, statusCode, message, exactError)
    }
}
