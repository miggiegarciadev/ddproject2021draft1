// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)
// link: https://www.codewars.com/kata/580a094553bd9ec5d800007d/train/javascript

/*The Math.pow() function returns the base to the exponent power, as in baseexponent,
  the base and the exponent are in decimal numeral system.

Because pow() is a static method of Math, use it as Math.pow(), rather than as a
method of a Math object you created. (Math has no constructor.) If the base is
negative and the exponent is not an integer, the result is NaN.

P num
R "It's hotter than the sun!! || "Help yourself to a honeycomb Yorkie for the glovebox."
E 2000 is greater than 1000
395 is less than 1000
Psuedo Code
number sqaured
number bigger than 1000 return "its hotter ...""
number less than 1000 return "helo yoursel..."
because im using exponents math.powe makes the most sense to use
*/

function apple(x){

  if (Mathh.pow(x,2) > 1000) {
    return "It's hotter than the sun!!";
  } else {
    return "Help youself to a honeycomb Yorkie for the glovebox.";

  }
}
