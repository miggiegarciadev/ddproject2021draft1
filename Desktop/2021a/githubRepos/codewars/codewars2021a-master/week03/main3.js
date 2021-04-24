/*link: https://www.codewars.com/kata/569e09850a8e371ab200000b/train/javascript

instructions: 
This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.

P n (an interger)
R an array of intergers
E if n is 5 return [1,2,3,4,5]
Psuedo Code 
start with an empty array because the length of it is not provided except for n
    - n is the max interger 
if the value of n start at 1 and keep adding 1 until you get a new number like a counter
method that gives new array with added elements in it 
return the new array 


n is provided (being the max interger)
return array include value of n


The push() method adds one or more elements to the end of an array and returns the new length of the array.
*/


function preFizz(n) {
  let newArray =[]
  //empty array 
  for(var i = 1; i < n + 1; i++){
    //this counter start the value of n at 1 and keeps adding one to that array 
    newArray.push(i);
    //push() gives us the new array with add the value of n which is i 
  }
  return newArray;
  // gives us back the new array that is no longer empty but worth the value of i given that i had a counter in it
}
