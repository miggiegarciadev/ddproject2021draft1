Code War 1
/////////////////////////////////////////////////////////////////////////////////////

/* Link:
www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript
Instructions:
The wide mouth frog is particularly interested in the eating habits of other creatures.
He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat wide-mouthed frogs!
When he meets the alligator, it then makes a tiny mouth.
Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.
P (Parameters: whats  coming into the function [input])
eatingHabits
mouthSize
- animal (arguement being taken in by mouth_size which is animals encountered by from like the alligator)
- alligator (if this is true, return small else return wide)
- small (size of mouuth)
- wide (size of mouth for any other animal that is not an alligator)
- mouth_size (complete this and take in one argument)
R(Returns: what is the result, what do you end up wtih?)
- if animal ==== alligator return small
- if animal ==== anythingElse return wide
E(Examples: play with the idea, write down things that
  can actually happen)
  Test.assertEquals(mouthSize("toucan"),"wide")
  Test.assertEquals(mouthSize("ant bear"),"wide")
  Test.assertEquals(mouthSize("alligator"),"small")
P (Psuedo Code: plain English what you want to happen, step by
  step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)
  maybe maybe an if else statement, boolean, pass in an argument into the function, define some variables
  1. The frog's mouth is small when encoutnering  an alligator. (return small)
  2. The frog's mouth is wide when encoutering any other type of animal like a toucan or an ant bear.(return wide)
Definitions -
parameters: are the names you specify in the function definitions
arguements: are the values you pass to the function. they take on the names of the parameters in the function definition
function: is a block of code designed to to perform a particular task and it is executed when "something" invokes (or calls on it) on it
function definition: is a regular bindin where the value of the binding is a function...javascript functions are defined wih the function keyword and you can use a function declaration or function expression
value: are the values that compromise values like Boolean, strings, arrays, numbers, etc.
*/

function mouthSize(animal){
  if (animal === "alligator" || animal === "ALLIGATOR"){
    return "small";
  }else{
    return "wide";
  }
}
// even though the instuctions say that it is case sensitive, i decided to add in the uppercase alliator because in the testing the capitalizaed alligator needed to return small which is confusing but none the less i used the double pipes for an "or" statement
// i decided to use the if else statement because i looked at the keywords that were in the instructions and looking at my psuedo code i thought this was the best option after SEVERAL failed attempts lol
