// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)

/*
link:  https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript
instructions:
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
[Make sure you type the exact thing I wrote or the program may not execute properly]
P name
R "Hello, <name> how are you doing today?"
E "Hello, Ryan how are you doing today?" <or> "Hello, Shingles how are you doing today?")
Psuedo Code
1. split the setence before and after the <name>
2. dont forget the spaces
3. return the full setence as a concatenation
*/
function greet(name){
  //your code here
  let greeting = 'Hello, '
  let statement = ' how are you doing today?'
  return greeting + name + statement
}
