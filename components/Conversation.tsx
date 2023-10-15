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
    //TODO: Fetch for chat completions



    //return something
    return <div><div className = "conversation">
        {
            messages.map((item: ChatMessage, idx: number) => {
                //TODO: We need to do some conditional component alignment based on the Message.role
                //since it should display a dialogue
                return <div key={idx}><ChatBox textMessage={item.content}></ChatBox></div>;
            })
        }
        </div>
        <InputBox inputCallback = {()=> {}}></InputBox>
        </div>;

}