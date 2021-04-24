Code War 1
/////////////////////////////////////////////////////////////////////////////////////

Link: www.codewars.com/kata/5861d28f124b35723e00005e/solutions/javascript


Instructions:
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. The input values are always positive.

PREP:
P (Parameters: whats  coming into the function [input])
zerofuel
distanceToPump = 50 miles
mpg or miles per gallon = 25
fuelLeft = about 50
true and false values which are booleans

R(Returns: what is the result, what do you end up wtih?)
I want to end up with a true or false value  and I also need to know if I can get to the pump to get gas.
I also know that the value is positive.
E(Examples: play with the idea, write down things that
  can actually happen)
  assert.equal(zeroFuel(50, 25, 2), true); this first is true because ou have 50 miles to the pump, 25 miles per gallon and you have 2 gallons left which the math says that your estimate should get yo ass to the pump
    assert.equal(zeroFuel(100, 50, 1), false); this is false because if the gas station is 100 miles away and your miles per gallon is 50 but you only have 1 gallon of gas left that means you would only make it 1/2 way before your car runs out of gas
P(Psuedo Code: plain English what you want to happen, step by
  step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)
  1. i want to double check if based ony my average miles per gallon i can make it to the gas station if i know how far the gas station is from where i am.
  2. find out how much gas you have left in the car
  3. find out how far the gas station is from you current location
  4. estimate the miles per gallon for my car
  5. divide the number miles per gallon into the distance of the gas station to tell me if my car can make it
  6. if the number of fuel left is equal to the mpg then i can make it but if the fuel left is less not the mpg i cannot make it (Boolean)


Definitions:


Answer:
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  console.log(distanceToPump, mpg, fuelLeft)

  if (distanceToPump / mpg == fuelLeft || distanceToPump / mpg <= fuelLeft){
    return true
  } else {
    return false
  }
};


Extra Notes:
