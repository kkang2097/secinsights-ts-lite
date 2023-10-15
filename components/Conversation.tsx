//NextJS workaround to keep our React components alive
'use client'

//Act like we're working in vanilla React again
import React, {Component} from 'react';
import { ChatBox } from './ChatBox';
import {InputBox} from '@/components/InputBox';
import {ChatMessage, MessageType} from "llamaindex";


export const Conversation = () => {

    //State
    let messages: ChatMessage[] = [];
    let dummyChatMessage: ChatMessage = {content: "hello", role: "nothing" as MessageType};
    messages.push(dummyChatMessage);

    //helpers



    //return something
    return <div><div className = "conversation">
        {
            //TODO: Map the dynamic list
            messages.map((item: ChatMessage, index: number) => {
                return <ChatBox textMessage={item.content}></ChatBox>;
            })
        }
        </div>
        <InputBox inputCallback = {()=> {}}></InputBox>
        </div>;

}