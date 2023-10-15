//NextJS workaround to keep our React components alive
'use client'

//Act like we're working in vanilla React again
import React, {Component} from 'react';
import { ChatBox } from './ChatBox';

export class Conversation extends React.Component {

    //State



    //helpers


    render(){
        //return something
        return <div className = "conversation">
            CONVERSATION
            {
                //TODO: Map the dynamic list
            }
            </div>;
    }
}