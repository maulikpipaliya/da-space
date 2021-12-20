import React from "react"
import "./ChatBox.css"
import MessageForm from "./MessageForm"
import MyMessage from "./MyMessage"
import TheirMessage from "./TheirMessage"

const ChatBox = () => {
    const renderMessages = () => {
        // const keys = Object.keys(messages)

        // return keys.map((key, index) => {
            // const message = messages[key]
            // const lastMessageKey = index === 0 ? null : keys[index - 1]
            // const isMyMessage = userName === message.sender.username

            return (
                <div style={{ width: "100%" }}>
                    <div className="message-block">
                        {/* {isMyMessage ? ( */}
                            <MyMessage />
                        {/* ) : ( */}
                            <TheirMessage />
                        {/* )} */}
                    </div>
                    {/* <div
                        className="read-receipts"
                        style={{
                            marginRight: isMyMessage ? "18px" : "0px",
                            marginLeft: isMyMessage ? "0px" : "68px",
                        }}
                    >
                        {renderReadReceipts(message, isMyMessage)}
                    </div> */}
                </div>
            )
        // })
    }

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">Demo</div>
                <div className="chat-subtitle">
                    Say Hello!
                    {/* {chat.people.map((person) => ` ${person.person.username}`)} */}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: "100px" }} />
            <div className="message-form-container">
                <MessageForm />
            </div>
        </div>
    )
}

export default ChatBox
