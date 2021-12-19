import ConversationService from "../services/conversation.service"

export const getConversations = async (req, res) => {
    try {
        const conversations = ConversationService.getAllConversations(
            req.user.username
        )
        res.status(200).json(conversations)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getConversation = async (req, res) => {
    const { id } = req.params
    try {
        const conversation = ConversationService.getConversation(id)
        res.status(200).json(conversation)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const postMessage = async (req, res) => {
    const { message, type } = req.body
    const { id: conversationId } = req.params
    const updatedConversation = ConversationService.postMessage(
        conversationId,
        req.userId,
        message,
        type
    )
    res.json(updatedConversation)
}

export const createConversation = async (req, res) => {
    const conversation = req.body
    try {
        const newConversation = await ConversationService.createConversation(
            conversation.members,
            conversation.name
        )
        res.status(201).json(newConversation)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
