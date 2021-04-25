// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)

Is n divisible by x and y?

/*Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive,
non-zero digits.
PREP 
Parameters: n, x, y
Results: true and false 
Examples: n = 3, x = 1, y = 3 => true because 3 is divisible by 1 and 3
n = 12, x = 2, y = 6 => true because 12 is divisible by 2 and 6
n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
n = 12, x = 7, y = 5 => false because 12 is neither divisible by 7 nor 5
Psuedo Code: If x

*/


function isDivisible(n, x, y) {
 if (n%x === 0 && n%y === 0){ //remainder / modulus operator ( % ) returns the remainder after (integer) division
   // if youre dealing with divisiblity is it remainder because it would technically does have a remainder so you make it extra equal to 0
 return true //and this means that n is divisible by x and y at the same time so it is if the same if statement with the and logical represented by &&
 }else { 
 return false // if the number is not divisible by x any y it is false 
 }
} // the return values are boolean (data types) 

// if statement 
// else statement 
// and two return values that happen to be boolean with in ONE function
