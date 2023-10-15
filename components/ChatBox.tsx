import React from 'react';

//Simple functional component here
export const ChatBox = (text: string) => {
    return <div className="chatbox">
    <p className="conversation-text">{text}</p>
    </div>;
}