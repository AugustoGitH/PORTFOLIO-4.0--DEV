import { Router } from "express";
import routersAdmin from "./Admin"
import routersPublic from "./Public"

const router = Router()
const baseRoute = "/api"

router.use(baseRoute, routersAdmin)
router.use(baseRoute, routersPublic)

export default router