import express, { Response, Request, NextFunction, Router } from "express"

export type TRoute = {
    path: string,
    method: "get" | "post" | "put" | "delete",
    controller: ( req: Request, res: Response, next: NextFunction )=> void
}