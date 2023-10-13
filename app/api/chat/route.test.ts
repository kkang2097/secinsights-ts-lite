import {POST} from './route';

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
        test("api/chat/post", ()=> {
            
            //Expect something here
            expect(1).toBe(1);
        });
    }
);