import { TRoute } from "../routers/base/types";
import { Router, Response, Request, NextFunction } from "express"

interface IParamsCreateRouters{
    router: Router,
    middleware?: (req: Request, res: Response, next: NextFunction)=> void,
    routers: TRoute[],
}

const createRouters = ({router, middleware,  routers}: IParamsCreateRouters) => {
    const midCond = middleware ? middleware : (req: Request, res: Response, next: NextFunction)=> { next() }
    routers.forEach(route=>{
        router[route.method](route.path, midCond, route.controller)
    })
}

export default createRouters