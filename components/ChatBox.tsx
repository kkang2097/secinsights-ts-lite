'use client'
import React, {memo} from 'react';
import { ChatbotLogo, UserLogo } from "./RoleLogo";

export const ChatBox = memo(({ role, textMessage }: { role: string; textMessage: string }) => {
    const isUser = role === "user";
    const messageDataClass = isUser ? "message-data float-right" : "message-data pull-left";
    const logoComponent = isUser ? <UserLogo /> : <ChatbotLogo />;
    const messageClass = isUser ? "message my-message float-right" : "message other-message";

    return (
        <li className="clearfix chat-item">
            <div className={messageDataClass}>
                {logoComponent}
            </div>
            <div className={messageClass}>
                {textMessage}
            </div>
        </li>
    );
});
