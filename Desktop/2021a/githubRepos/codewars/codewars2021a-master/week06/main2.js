// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)

Array plus Array 

// PREP 
// parameters: arr1, arr2 
// results: 21, -21, 15, 2100
// examples: arr1 = [1,2,3] arr2 = [4,5,6] adding these together would be (1+2+3) + (4+5+6) = (6+15) = 21
// psuedo code: I want to add the the individuals numbers(elements) from array1 and array2  so that means that I want to isolate the numbers(elements) with in the array and then add the sum of each array together. This is idifferent from cancatenation. 


function arrayPlusArray(arr1, arr2) {
  var newValue = 0 //this is the new number value for array 1 and it is set to zero because you want to start at nothing and will eventually become the sum of of the elements of array 1 
  var newNum = 0 // this is the new number value for array 1 which will eventually become the sum of array 2
  
  for(var i = 0; i < arr1.length; i++){
  var newValue = newValue += arr1[i];   
  }
  //this is a for for loop handy for a number of reasons espcially when you want to add the elements of a array together to get the sume
  // assigning the varriable i for index and setting it to zero, and 
  //wanting to get the length of the array so that means that until the 
  //i will keep looping until it get up to the length of the aray and i++ 
  //means that for each time i becomes a new number add one to it  
  //these comments go with the for loop below 

  for(var j = 0; j <arr2.length; j++){
    var newNum = newNum += arr2[j];
  }
  // for the above for loop I just created new variable because i will be adding thhe sum of arr1 and arr2
  // i also switched out i for j because it is a variable so eventually if i needed to add more arrays or working with more data, it is a good practice to have when working with multiple arrays
  console.log (newValue + newNum); // testing out the math 
    return (newValue + newNum); // giving me the sum of what array 1 is and array 2 is 
    console.log  (arrayPlusArray(arr1 + arr2)); //array.reduce function 
  }
  
 // further reading: https://codeburst.io/reduce-vs-for-loop-3c1a84e63872
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
