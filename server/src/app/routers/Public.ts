import { Router } from "express";
import { publicRouters } from "./base/Public"
import createRouters from "../utils/createRouters";

const router = Router()

createRouters({
    router,
    routers: publicRouters
})

export default router