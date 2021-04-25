Code War 1
/////////////////////////////////////////////////////////////////////////////////////

Link:
  www.codewars.com / kata / 54 edbc7200b811e956000556 / train / javascript

Instructions:
  Consider an array / list of sheep where some sheep may be missing from their place.We need a

function that counts the number of sheep present in the array(true means present).


PREP:
  P(Parameters: whats coming into the
    function [input]) -
  we need an array to count the sheep -
  countSheeps(the
    function) -
  arrayOfSheep(arguement that is being passed in to the funtion of countSheeps) -
  An array of sheep is coming into the

function -we might need a boolean(s) because the example includes true and false values

R(Returns: what is the result, what do you end up wtih ? )
the
return injust a number

E(Examples: play with the idea, write down things that can actually happen) -
  THE CORRECT ANSWER WOULD BE 17...
  [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
  ]

[true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true];

P(Psuedo Code: plain English what you want to happen, step by step...think of these questions: 1. What could the user do ?2. What does the user see ? 3. What does the user expect ? ) -
  I want to count the number of sheep that are present of the attedance list(array) that i have -
  I do not know how manny sheep are present because P.C.should work
  for
any array. -
  I know that some of the sheep might be missing or absent so this value would be false. -
  If the sheep are present, I want to count those sheep in the list(array)



Definitions:
  array - (a list) - used to put multiple values in a single variable
variable - contianers
for storying data values, is an example x or y and you can use the keyword
var x = 5 or
let y = 7

function -a block of code designed to perform a particular task, a

function executes when "something"
invokes it or calls it.
  .length property - counts the number of elements in the array
arguements - is the value to pass into the

function and they take on the names of the parameters in the funtion definition, the arguements are the real values passed to and received by the

function
parameters - are the names to specify in the

function definition
to invoke a

function means to call it
loop - really great to use and hand
if you want to run the same code over and over again each time with a different value like adding a counter of i++
for loop - this loops through a block of code
while in a specified conditio is true
always add in { } when using for loops to make it a lot more obvious what is going on



Answer:
  function countSheeps(arrayOfSheep) { // we are passing one arguement named "arrayOfSheep" into the function declaration "countSheeps"
    var num = 0; // we are assign the number value of zero to the variable num, var is being used even though it is depricated because codewar be funky
    for (var i = 0; i < arrayOfSheep.length; i++) { // "i" is the other variable being assigned the value of the number zero, while also saying that i is less than or equal to the length of the elements in the array called "arrayOfSheep", and we are doing a counter of adding 1 to the variable "i" but we are also runnning the for loop which means that the condition of variable i being less than the length of the array as we keep counting the items in the array,so we are going to keep adding 1 to variable "i" as long as it ends up being less than the number of elements in the array then we stop hence the for looping
      if (arrayOfSheep[i] == true) { // this is a conditional meaning if  the index of the array of sheep is compared to true then add 1 to num which is our first variable.
        num++;
      }
    }
    return num; //lastly we want to return the variable num because the instructions had asked us to return the number present sheep in the array
  }

Extra Notes:
  honestly this was very confusin, i had to do a lot of googling and searching to find or come up with this answer..the instructions were very lousy
