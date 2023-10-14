// import {NextResponse} from 'next';
import {ContextEngine} from '@/lits_components/contextEngine';
import {ChatResponse} from "llamaindex";
import { NextRequest } from 'next/server';
import {iteratorToStream} from '@/utils/streamConverter';

//TODO: Deprecate this and combine into one function hopefully

//This handles POST requests only
export async function POST(request: NextRequest): Promise<Response> {

    const body = await request.body;
    const question: string = body.query;

    const result: ChatResponse = await ContextEngine.chat(question, undefined);
    console.log(result);
    return Response.json(result, {status: 200});
}

export async function POST_STREAM(request: NextRequest): Promise<Response> {
    const body = await request.body;
    const question: string = body.query;
    //Make iterator
    const queryStream : AsyncGenerator<string, void, unknown> = await ContextEngine.chat(question, undefined, true);

    //Convert to a ReadableStream, then package that into a Response object.
    return new Response(iteratorToStream(queryStream));
}