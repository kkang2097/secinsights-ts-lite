/**
 * @jest-environment node
 */

import postHandle from './route';
import createMocks from 'node-mocks-http';
import { getMockQuery } from '@/utils/mockReq';

//Dummy test here.
describe("Something",
()=>{
    test("to evaluate to ...", ()=> {
        expect(1).toBe(1);
    });

});


//API tests here
describe(
    "Testing Chat API routes",
    ()=> {
        //Individual test
        test("api/chat/no-stream", async ()=> {
            
            //Expect something here
            const mockRequest = getMockQuery("Where is Istanbul?");
            console.log("got mock query");
            const response = await postHandle(mockRequest);
            expect(response.status).toBe(200);
        });
    }
);