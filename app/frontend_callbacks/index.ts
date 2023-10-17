


//Normally, this would all be done in Axios.
//But since this is NextJS, we can just use the Fetch API.
import {ChatResponse} from 'llamaindex';



export const doSomething = () => {
    return "sausage";
}


//Don't use this yet
export const getQuery = async (query: string) : Promise<ChatResponse> => {
    const response = await fetch(`http://localhost:3000/api/chat/route`,
    {
        method: 'POST',
        body: JSON.stringify({query: query})
    });
    console.log("GOT RESPONSE");
    return response.body;
}