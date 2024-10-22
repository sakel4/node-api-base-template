import { BaseError } from '@/config/customErrors/baseError';
import { Request, Response, NextFunction } from 'express';


const httpErrorHandler = (error: Error | BaseError, req: Request, res: Response, next: NextFunction) => {
    const requestURI: string = req.url;
    const requestMethod: string = req.method;
    const requestIP: string | string[] | undefined = req.headers['x-real-ip'] || req.socket.remoteAddress;
    let statusCode = 500;
    let userMessage: string = error.message;

    if (error instanceof BaseError) {
        statusCode = error.getStatusCode();
    } else {
        userMessage = "Something went wrong"
    }

    res.status(statusCode).json({
        success: false,
        error: {
            message: userMessage
        }
    });
}

export {
    httpErrorHandler
}
