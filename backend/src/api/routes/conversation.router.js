import { Router } from "express"
const router = Router()

import {
    getConversation,
    getConversations,
    postMessage,
    createConversation,
} from "../controllers/conversations.controller"
import auth from "../middlewares/auth.middleware"

router.get("/", auth, getConversations)
router.get("/:id", auth, getConversation)
router.patch("/message/:id", auth, postMessage)
router.post("/conversation", auth, createConversation)

export default router
