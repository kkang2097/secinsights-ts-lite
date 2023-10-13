import { NextResponse } from 'next/server';
import {ContextEngine} from '@/lits_components/contextEngine';
import {Response} from 'llamaindex';

export async function POST(request: Request) {

    const body = await request.json();
    const question: string = body.query;

    const res: Response = await ContextEngine.chat(question, undefined, false);

    console.log(res);

    return NextResponse.json({role: "assistant", content: res.text});
}