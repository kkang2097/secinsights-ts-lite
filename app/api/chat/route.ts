// import {NextResponse} from 'next';
import {ContextEngine} from '@/lits_components/contextEngine';
import {ChatResponse} from "llamaindex";
import { NextRequest, NextApiRequest, NextApiResponse } from 'next/server';
import {iteratorToStream} from '@/utils/streamConverter';

//TODO: Deprecate this and combine into one function hopefully

//This handles POST requests only
export async function POST(request: NextApiRequest) : Promise<NextApiResponse<ChatResponse>> {
    //The issue here is that the request body is empty, not the response body.
    //Update: Issue fixed.
    const body = await request.json();
    const question: string = body.query;

    const result: ChatResponse = await ContextEngine.chat(question, undefined);

    return Response.json(result);
}


//This is for the test script route.test.ts

// export default async function POST(request: Request): Promise<Response> {

//     // const body = await request.json();
//     const question: string = "Where is Istanbul?";

//     const result: ChatResponse = await ContextEngine.chat(question, undefined);
//     return Response.json(result, {status: 200});
// }





//For later...
//TODO: Test this out
// export async function POST_STREAM(request: NextRequest): Promise<Response> {
//     const body = await request.body;
//     const question: string = body.query;
//     //Make iterator
//     const queryStream : AsyncGenerator<string, void, unknown> = await ContextEngine.chat(question, undefined, true);

//     //Convert to a ReadableStream, then package that into a Response object.
//     return new Response(iteratorToStream(queryStream));
// }