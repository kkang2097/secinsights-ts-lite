//NextJS workaround to keep our React components alive
'use client'

//Act like we're working in vanilla React again
import React, {Component,useState} from 'react';
import { ChatBox } from './ChatBox';
import {InputBox} from '@/components/InputBox';
import {ChatMessage, MessageType} from "llamaindex";
import {getQuery} from '@/app/frontend_callbacks/index';
import {Query} from '@/types/Query';

export const Conversation = () => {

    //State
    // let messages: ChatMessage[] = [];
    let dummyChatMessage: ChatMessage = {content: "hello", role: "nothing" as MessageType};
    // messages.push(dummyChatMessage);
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    //helpers
    //TODO: Fetch for chat completions
    //TODO: Debug fetch frontend/backend connection

    function doThis(item: string){
        console.log("GETTING DOTHIS")
    }


    async function query(query: string) : Promise<void> {
        console.log("TRYING QUERY");
        //TODO: Fix empty API call

        const response = await fetch(`http://localhost:3000/api/dummy`,
        {
            method: 'POST',
            body: JSON.stringify({query: "Where is Istanbul?"} as Query),
            headers: {
                "Content-Type": "application/json"
              },
            mode: 'cors'
        });

        const data = await response.json();

        //Adds new message to message list
        setMessages([...messages, dummyChatMessage]);
        console.log("GOT QUERY");
        // messages.push(response);
    }


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
        <InputBox inputCallback = {query}/>
        </div>;

}