//Link: https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript
//Instructions: 
//Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.
// P a , b
// R Returned value should be the value left over after dividing as much as possible
// or NaN when divding by zero
// E 
// 17/5=3R2
// 16/5=3R1
// 0/0=0 NaN
// Psuedo Code
// if b/a has a remainder, return the remainder
// if a/b has a remainder, return the remainder 
// if b/awwhen a or b = 0 return NaN 
// the remainder operand in is % 
//ternary operator: only one two takes in 3 operands 
//condition followed by ? expression 1 : expresion 2

function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
//   console.log (a%b)
//   console.log (b%a)
//   console.log (a%0)
//   console.log (b%0)
//   return (b%a)
//   return (a%b)
//   return (b%a)
//   return (b/a)
//   return (a%b)
//   return (a%0)
//   return (b%0)
if (b>a)
  return b%a
    else
      return a%b
}
