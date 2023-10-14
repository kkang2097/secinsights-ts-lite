import React from 'react';

//Simple functional component here
export const ChatBox = (text) => {
    return <div className="chatbox">
    <p className="conversation-text">{text}</p>
    </div>;
}