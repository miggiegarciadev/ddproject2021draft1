// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)

Return Negative 8kyu

/* In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative? 

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

PREP 
Parameters: num
Result: num is num if negative number && -num = no change in value
Example: -3 === -3 || 1 becomes -1
Psuedo Code: If the number is negative print the number again. If the number is not 
negative print the number with a minus sign on the left of it
*/

function makeNegative(num) {
  // Code?
if (num<0){ // any number less than zero is a negative number && any number larger than 0 is a positive number
return num; // any number that is less than zero aka negative will be returned as is 
}
else{
return num*-1 // any number that left is most likely a positive number since it is larger than zero so i am 
//multiplying it by negative one to get back a negative number 
}
}
