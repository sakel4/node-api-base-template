import { logicUseCase } from "@/domain/useCases/baseLogic/logicUseCase";
import { Request, Response, NextFunction } from "express";

const baseRouteController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const result: string = await logicUseCase("Hello World");
    res.send({
        success: true,
        result
    });
};

export { baseRouteController };
