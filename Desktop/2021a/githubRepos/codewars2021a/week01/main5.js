Code War 1
/////////////////////////////////////////////////////////////////////////////////////
//Link:

/*Instructions:

PREP:
P (Parameters: whats  coming into the function [input])
R(Returns: what is the result, what do you end up wtih?)
E(Examples: play with the idea, write down things that
  can actually happen)
P(Psuedo Code: plain English what you want to happen, step by
  step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)


Definitions:


Answer: */
function getMiddle(s){
let wordArray = Array.from(String(s))
let first = (s.length/2)-1
let second = (s.length/2)
// console.log(wordArray[s.length/2].toString())
if(s.length%2==0){
 return wordArray[first].toString() + wordArray[second].toString()
}else{
 return wordArray[Math.floor(s.length/2)].toString()
}
}
(getthemiddle codewar)

Extra Notes:
