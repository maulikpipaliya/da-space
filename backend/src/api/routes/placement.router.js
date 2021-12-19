import { Router } from "express";

import { sayHello } from "../controllers/placement.controller.js";
const router = Router();

const router = Router({
    mergeParams: true,
})

router.get("/", sayHello);

export default router;
