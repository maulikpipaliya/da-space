import ConversationService from "../services/conversation.service.js"

export const getConversations = async (req, res) => {
    try {
        const conversations =
            await new ConversationService().getAllConversations(
                "61bf8af06017de30ebb418e0"
            )
        res.status(200).json(conversations)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getConversation = async (req, res) => {
    const { id } = req.params
    try {
        const conversation = await new ConversationService().getConversation(id)
        res.status(200).json(conversation)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const postMessage = async (req, res) => {
    const { message, type } = req.body
    const { id: conversationId } = req.params
    const updatedConversation = await new ConversationService().postMessage(
        conversationId,
        "61bf8af06017de30ebb418e0",
        message,
        type
    )
    res.json(updatedConversation)
}

export const createConversation = async (req, res) => {
    const conversation = req.body
    try {
        const newConversation =
            await await new ConversationService().createConversation(
                conversation.members,
                conversation.name
            )
        res.status(201).json(newConversation)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
