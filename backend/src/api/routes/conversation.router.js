import { Router } from "express"

const router = Router({
    mergeParams: true,
})

import {
    getConversation,
    getConversations,
    postMessage,
    createConversation,
} from "../controllers/conversations.controller.js"
import auth from "../middlewares/auth.middleware.js"

router.get("/", auth, getConversations)
router.post("/create", auth, createConversation)
router.get("/:id", auth, getConversation)
router.patch("/message/:id", auth, postMessage)

export default router
