'use client'
import React from 'react';

//Simple functional component here
export const ChatBox = ({textMessage}: {textMessage: string}) => <p className="conversation-text">{textMessage}</p>;
