/*
Link: https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

Instructions: 

P normPrice, discount, hol
R an interger rounded down
E 
(12, 50, 1000), 166
(17, 10, 500), 294
(24, 35, 3000), 357
Psuedo Code 
1. find the savings
2. round up to nearest whole interger
3. return the value of step 2 

high street price let normPrice =
duty free discount let discount =
cost of the holiday let hol
all inputs are intergers and not decimals
The Math.floor() function returns the largest integer less than or equal to a given number.
*/

function dutyFree(normPrice, discount, hol){
  var savings = normPrice * discount / 100;
  //step 1 above
  return Math.floor(hol/savings)
  //step 2 and 3 together
  console.log(normPrice)
  console.log(discount)
  console.log(hol)
  //testing to see what my examples are 
}
