import mongoose from "mongoose"

const messagesSchema = new mongoose.Schema({
    from_id: {
        type: String,
        required: true,
    },
    msg_text: {
        type: String,
        required: true,
    },
    msg_type: {
        type: String,
        required: true,
    },
    read_by: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    sent_at: {
        type: Date,
        default: Date.now,
    },
    is_modified: {
        type: Boolean,
        default: false,
    },
    modified_at: Date,
    is_deleted: {
        type: Boolean,
        default: false,
    },
    deleted_at: Date,
})

const messagesModel = mongoose.model("Messages", messagesSchema)
export default messagesModel
