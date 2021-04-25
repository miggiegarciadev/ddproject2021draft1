// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)

Array plus Array

function arrayPlusArray(arr1, arr2) {
  var newValue = 0
  var newNum = 0 
  
  for(var i = 0; i < arr1.length; i++){
  var newValue = newValue += arr1[i];   
}
  for(var j = 0; j <arr2.length; j++){
    var newNum = newNum += arr2[j];
  
  }
  console.log (newValue + newNum);
    return (newValue + newNum);
    console.log  (arrayPlusArray(arr1 + arr2));
  }
