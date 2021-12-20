import { Router } from "express"

import { helloPlacement } from "../controllers/placement.controller.js"

const router = Router({
    mergeParams: true,
})

router.get("/", helloPlacement)

export default router
