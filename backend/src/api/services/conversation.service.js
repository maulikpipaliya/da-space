import Conversation from "../../models/conversation.model.js"

export default class ConversationService {
    async getAllConversations(userId) {
        return await Conversation.find({
            members: userId,
            is_deleted: false,
        }).sort({ updated_at: -1 })
    }

    async getConversation(conversationId) {
        return await Conversation.findById(conversationId)
    }

    async postMessage(conversationId, from, message, type) {
        const conversation = await Conversation.findById(conversationId)\
        conversation.messages.push({
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
            const newConvo = await newConversation.save()
            return newConvo
        } catch (error) {
            throw new Error(error.message)
        }
    }
}
