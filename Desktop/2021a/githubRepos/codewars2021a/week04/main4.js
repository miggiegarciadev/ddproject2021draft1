// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)
/*
link:

Beginner Series #1 School Paperwork 8kyu

INTRUCTIONS:

P
R
E
P
*/

let n = 0; // n is classmates
let m = 0; // m is pages


// function paperwork(n, m) {
//   if (m , 0 || n < 0){
//   return 0;
// }
// return m *n;
// }

// why are there negative numbers in this solution? that does not make any sense because you cannot have a negative number of people or a negative numer of papers that would be zero...

function paperwork(n,m) {
if (n<= 0 || m <= 0) {
var pages = 0;
} else pages = n * m;
return pages;
}
