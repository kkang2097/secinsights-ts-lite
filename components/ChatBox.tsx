'use client'
import React, {memo} from 'react';

//Simple functional component here
export const ChatBox = memo(({textMessage}: {textMessage: string}) => <p className="conversation-text">{textMessage}</p>);
