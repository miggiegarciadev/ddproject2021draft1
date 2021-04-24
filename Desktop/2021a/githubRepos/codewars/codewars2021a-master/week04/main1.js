
// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)
// link: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

//instructions:

// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry with
// strings with less than two characters.

/*
P str
R hello -> lle
E 'eloquent' becomes 'loquen'
place', 'lac'
Psuedo Code
1. jUSt remove the first and last letter
NOT REVERSING
*/

function removeChar(str) {
  return str.slice(1, -1);
  //.slice() looks at the length of the string and removes whatever position is in the parathensis based on zero based index
  //second numbe is the end index and is also zero based index If negative, it is treated as str.length + endIndex. (For example, if endIndex is -3, it is treated as str.length - 3.)
  //returns a new string
}
