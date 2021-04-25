// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)

/*link: https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
instructions:
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.
Params s
Return
 b***i***t**c***o***i***n
m***i***g***g***i***e
Example
bitcoin -> b***i***t**c***o***i***n
miggie -> m***i***g***g***i***e
Psuedo Code
1. sort strings within array alphabetically
2. get first word that is alphabetically sorted and have this value returned
3. but returned with 3 * in between each character as one  string
definitions:
A vector is a special kind of array whose size can be increased or decreased based on the data stored in it. Vectors can hold any type of elements, objects and data types. It can be said that vectors are one-dimensional dynamic arrays.
sort() method sorts the elements of an array in place and returns the sorted array.
Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
ASCII code table http://sticksandstones.kstrom.com/appen.html
*/


function twoSort(s) {
  let arr = s.sort();
  // have the array equal to the param being sorted
  // .sort() organizes the strings within the array using the value of each letter so a is valued at 097
  return Array.from(arr[0]).join('***');
  // the Array.from is going to give me a new array from the first element in the arr (array) and join with the *** will be the space between each element with in the string
}
