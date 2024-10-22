import { logic2UseCase } from "@/domain/useCases/baseLogic2/logic2UseCase";
import { Request, Response, NextFunction } from "express";

const baseRouteController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const result: string = await logic2UseCase("Hello World 2");
    res.send(result);
};

export { baseRouteController };
