import { Router } from "express";
import credentialCheckAccess from "../utils/credentialCheckAccess";
import { adminRouters } from "./base/Admin"
import createRouters from "../utils/createRouters";

const router = Router()

createRouters({
    router,
    middleware: credentialCheckAccess,
    routers: adminRouters
})

export default router