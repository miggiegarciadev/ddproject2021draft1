// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)
/*
link:

Reverse List Order 8kyu

INTRUCTIONS:

P
R
E
P
*/

// In this kata you will create a function that takes in a list and returns a list with the reverse order.
// Example: reverseList([1,2,3,4]) == [4,3,2,1]
// Example: reverseList([3,1,5,4]) == [4,5,1,3]

function reverseList(list) {
 var reverse= []; 
 for (var i = list.length-1; i >=0; i --){
   reverse.push(list[i]);
}
return reverse;
}
