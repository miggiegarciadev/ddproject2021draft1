/*
Link: https://www.codewars.com/kata/523b623152af8a30c6000027/train/javascript

Instructions:
Now you have to write a function that takes an argument and returns the square of it.

P num
R square of the arguement
E 3 squared is 9 or 4 sqaured is 12 2 squared is 4
Psuedo code
make a function name square (name of function given below)
pass in arguement num =>
idk what the value of number that is being squared is
quick math = num^2 = new number **
assign a variable declaration to new number  example: let newNum = math library method
show the new number
**think about what method from the Math library you can use to square
a number in JS

Math.power(num1, num2)
- num1 is the base number
- num2 is the exponent which the base number is being raised to


*/
// Write the "square"-function here

function square(num){
  //function name was given in comments
  //i declared the arguement to be num which is the number that needs to be sqaured
  let newNum = Math.pow(num, 2)
  //num is the base and 2 is the square root
  return newNum
  //this is returning what the number is sqaured after using the math library method of pow ... info from mdn
}
