import { Router } from "express"
import * as AuthController from "../controllers/auth.controller.js"


const router = Router({
    mergeParams: true,
})

router.get("/", AuthController.authUser)

export default router
