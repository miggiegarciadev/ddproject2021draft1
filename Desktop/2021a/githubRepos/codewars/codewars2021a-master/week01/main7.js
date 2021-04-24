Code War 1
/////////////////////////////////////////////////////////////////////////////////////

/*
Link: https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript

Instructions:
The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):
3 --> "Earth"

Definitions:
The switch statement is used to perform different actions based on different conditions.
This is how it works:
The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.
BREAK - (this is what is missing from the original function for it to run through all of the case)
When JavaScript reaches a break keyword, it breaks out of the switch block.
This will stop the execution inside the switch block.
It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.



Params(id)
Return name
Examples 'Venus', 'Jupiter', 'Earth'
this example uses the number to get the name of the planet
Psuedo Code
id is the param being passing into the function getPlanetName
the variable name is = a string and each string is the name of a planet
the switch(id) expression is getting evalued once based on the id value, a planet name is going to be returned
this is like an if statement but using switch
i need to figure what the error/bug is so that is can execute properly
after my research, i figured out that i need to add the word break; before each new case # line

*/

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
  }

  return name;
}
