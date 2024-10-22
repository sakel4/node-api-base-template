import { Error401 } from "@/config/customErrors/error401";
import { Request, Response, NextFunction } from "express";

export const middleware = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return next(new Error401("Base2 authorization", "Authorization header is missing"));
    }

    return next();
};

export default middleware;
