import Conversation from "../../models/conversation.model"

export default class ConversationService {
    async getAllConversations(userName) {
        return await Conversation.find({
            "members.username": userName,
        }).sort({ updated_at: -1 })
    }

    async getConversation(conversationId) {
        return await Conversation.findById(conversationId)
    }

    async postMessage(conversationId, from, message, type) {
        const conversation = await Conversation.findById(conversationId)
        conversation.Messages.push({
            from_id: from,
            msg_text: message,
            msg_type: type,
        })
        conversation.UpdatedAt = new Date()

        return await Conversation.findByIdAndUpdate(
            conversationId,
            conversation,
            { new: true }
        )
    }
    async createConversation(members, name = "") {
        const newConversation = new Conversation({ members, name })
        try {
            await newConversation.save()
            return newConversation
        } catch (error) {
            throw new Error(error.message)
        }
    }
}
