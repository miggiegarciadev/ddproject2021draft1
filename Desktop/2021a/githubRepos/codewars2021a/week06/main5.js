// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)

// PREP: 
// Parameter: str
// Result: number of vowels 
// Example: hello - e, o = 2 vowels 
// Psuedo Code: When given a word isolate the vowels in a word. For this  example [a,e,i,o,u] only vowels not y. no lower case or spaces
// word = str 
// str.split()function

function getCount(str) {
  var vowelsCount = 0;
  let splitter = str.split('', str.length)
  let counter = 0
  for (i=0;i<splitter.length; i++){
    if(splitter[i] === 'a' || splitter[i] === 'e' || splitter[i] === 'i' || splitter[i] === 'o' || splitter[i] === 'u'){
    counter++
    }
    else{counter+=0}
  }
  return counter
}

//counter, for loop throughh the array and then return the counter
