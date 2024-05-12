import { sum } from "../sum"
test(" Sum function should calculate the sum of two numbers.", () =>{
    const result = sum(4, 9);
    
    //Assertion
    expect(result).toBe(13);
})