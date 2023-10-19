import {ContextEngine} from '@/lits_components/contextEngine';
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
    "Testing ContextEngine import",
    ()=> {
        //Individual test
        test("basic query", async ()=> {
            
            //Expect something here
            const response = await ContextEngine.chat("Where is Istanbul?");
            expect(response).toBe(200);
        });
    }
);