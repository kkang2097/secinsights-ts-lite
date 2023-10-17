// import {NextResponse} from 'next';
import {ContextEngine, getText} from '@/lits_components/contextEngine';
import {ChatResponse} from "llamaindex";
import { NextApiRequest, NextApiResponse} from 'next/server';
import {iteratorToStream} from '@/utils/streamConverter';
//
//Export the chat engine
//

//TODO: Deprecate this and combine into one function hopefully

// export async function GET(request: NextApiRequest) : Promise<Response> {
//     const body = await request.body;
//     return Response.json({response: "something"});
// } 


export async function POST(request: NextApiRequest) : Promise<NextApiResponse<ChatResponse>> {
    //The issue here is that the request body is empty, not the response body.
    //Update: Issue fixed.
    const body = await request.json();
    console.log("WAITING FOR ANSWER");

    //TODO: Make sure this returns something :(
    const data: ChatResponse = await ContextEngine.chat("Where is Istanbul");

    console.log("GOT ANSWER");

    // const data: ChatResponse = {content: "TOODOOO", role: "assistant"};
    return Response.json(JSON.stringify({noooo: getText()}));
}
