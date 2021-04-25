/*link: https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript

instructions: 

There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Param quantity, price
Return total cost of mangos
Example 
2 mangos + 1 free
ex1 = 2 mangos +1 free
quantity 3 
price 3 
cost 6
FOR EVERY 2 MANGOS 1 EXTRA 
ex2 = cost 30 divided by price 5 = 6 remainder 3 
quantity 9 
price 5 
cost 30

Psuedo Code


The strict inequality operator (!==) checks whether its two operands are not equal, returning a Boolean result. Unlike the inequality operator, the strict inequality operator always considers operands of different types to be different.
The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result to the variable. The types of the two operands determine the behavior of the addition assignment operator. Addition or concatenation is possible.
The remainder operator (%) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
*/

function mango(quantity, price){
  let cost = 0;
  // the cost start at zero we need to calculate it based how many mangoes we have 
  for (let newMangoAmount = 1; newMangoAmount <= quantity; newMangoAmount++) {
    // everytime you grab a mango it is newMangoAmount starting 1; the new number of mangos is less than the amount of mangos in the test, increase the counter by 1 
    if (newMangoAmount % 3 !== 0) {
      // if you divide the number of mangos you have by 3 and there is not reminder 
      cost += price;
      // add the price to the cost 
      
    }
  }
  
  return cost;
}
