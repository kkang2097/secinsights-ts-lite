//NextJS workaround to keep our React components alive
'use client'

//Act like we're working in vanilla React again
import React, {Component,useState} from 'react';
import ReactDOM from 'react-dom';
import { ChatBox } from './ChatBox';
import {InputBox} from '@/components/InputBox';
import {ChatMessage, MessageType} from "llamaindex";
import {getQuery} from '@/app/frontend_callbacks/index';
import {Query} from '@/types/Query';

export const Conversation = () => {

    //State
    // let messages: ChatMessage[] = [];
    let dummyChatMessage: ChatMessage = {content: "Hello, how can I help you?", role: "bot" as MessageType};
    const [messages, setMessages] = useState<ChatMessage[]>([
        dummyChatMessage
    ]);

    //helpers
    //TODO: Fetch for chat completions
    //TODO: Debug fetch frontend/backend connection

    function doThis(item: string){
        console.log("GETTING DOTHIS")
    }

    function addMessage(query: string) {
        const userChatMessage: ChatMessage = {content: query, role: "user"};
        setMessages((items: ChatMessage[]) => [...items, userChatMessage]);
    }

    async function query(query: string) : Promise<void> {
        //Add query to chat window
        // let tempList: ChatMessage[] = messages;
        // const userChatMessage: ChatMessage = {content: query, role: "user"};
        // setMessages([...messages, userChatMessage]);

        //Add LLM's response to chat window
        const response = await fetch(`http://localhost:3000/api/chat`,
        {
            method: 'POST',
            body: JSON.stringify({query: query} as Query),
            headers: {
                "Content-Type": "application/json"
              },
            // mode: 'cors'
        });

        const data = await response.json();
        const newChatMessage: ChatMessage = {content: data.response, role: "assistant"};
        setMessages((items: ChatMessage[]) => [...items, newChatMessage]);
        // messages.push(response);
    }


    //return something
    return (  
              <div className="card chat-wrap">
                <div className="chat">
                  <div className="chat-history">
                    <ul>
                      {messages.map((item: ChatMessage, idx: number) => {
                        return (
                          <div key={idx}>
                            <ChatBox
                              role={item.role}
                              textMessage={item.content}
                            ></ChatBox>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                  <InputBox
                    inputCallback={(chatString: string) => {
                      addMessage(chatString);
                      query(chatString);
                    }}
                  />
                </div>
              </div>
      );
      

}