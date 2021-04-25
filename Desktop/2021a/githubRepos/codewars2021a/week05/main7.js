// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)

Super Duper Easy 8kyu

/* Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

Note: in C#, you'll always get the input as a string, so the above applies if the string isn't representing a double value.
PREP 
Parameters: x
Result: Error, 56, 256 etc. (look at example below) 
Example: Test.describe("Basic tests", _=>{
  Test.assertEquals(problem("hello"), "Error");
  Test.assertEquals(problem(1), 56);
  Test.assertEquals(problem(5), 256);
  Test.assertEquals(problem(0), 6);
  Test.assertEquals(problem(1.2), 66);
  Test.assertEquals(problem(3), 156);
  Test.assertEquals(problem("RyanIsCool"), "Error");
  Test.assertEquals(problem(-3), -144);
  Test.assertEquals(problem(""), "Error");
  Test.assertEquals(problem(0.03), 7.5);
Psuedo Code: I want to solve for the value using PEMDAS on (x*50)+6. If inputed is not a number but a word, then i want an error message to display (the conditional) 

*/ 

function problem(x){
  //your code here
  if (typeof x === "string"){ //The typeof operator returns a string indicating the type of the unevaluated operand.
  // it is only looking at the specific string and we want it to return the error 
  // the condition is not true so it prints the error message
  // operand An expression representing the object or primitive whose type is to be returned.
 return "Error" //error message tells you that x does not equal the value string 
 }else{
 return (x*50)+6 //the if else statement will do the equation following pemdas rules to get the value 
 // i picked a if else statement because The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
// truthy defined by MDN is a value that is considered true based on a boolean and defined as truth unless it is false
}
}
