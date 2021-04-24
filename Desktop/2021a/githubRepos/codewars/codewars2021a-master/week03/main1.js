/* 
Link: https://www.codewars.com/kata/56170e844da7c6f647000063/train/javascript

Insturctions: 
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

P old
R toddy coke beer whisky
E age =22/whisky age =5/toddy
Psuedo Code 

1/ age is recieved
2/ counter and if/else statement
  under 14 - kid toddy
15-18 - teens - coke
19-20 - young adult - drink beer 
21+ - adult - whisky
3/return drink of choice
*/
 
let age = null
function peopleWithAgeDrink(age){
  if(age < 14)
    drink = 'toddy';
  else if(age < 18)
    drink = 'coke'
  else if(age < 21)
    drink = 'beer';
  else if(age => 21)
    drink = 'whisky';
  return 'drink ' + drink;
}
