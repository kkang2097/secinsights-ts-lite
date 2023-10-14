import {Query} from '@/types/Query';

//Turns a prompt into a mock Query
export const getMockQuery = (prompt: string) => {
    return {
    body: {
        query: prompt
    },
} as unknown as Request;
}
