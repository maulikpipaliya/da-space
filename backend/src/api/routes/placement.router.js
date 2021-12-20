import { Router } from "express"

import { helloPlacement } from "../controllers/placement.controller.js"

const router = Router({
    mergeParams: true,
})

router.get("/", helloPlacement)
router.post("/addPlacement", addPlacement)


export default router
