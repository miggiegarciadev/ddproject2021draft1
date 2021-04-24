// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)

Century of the Year 8kyu 

/* The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

PREP 
Parameters: century, year
Results: 
Examples:
Psuedo Code:
*/


function century(year) {
  // Finish this :)
  return Math.ceil(year/100) // ceil rounds the whole number up 
}
