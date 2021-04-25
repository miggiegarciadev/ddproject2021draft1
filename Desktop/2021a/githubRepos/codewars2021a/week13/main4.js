link:
https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript

Intructions:
Write a function to split a string and convert it into an array of words. For example:
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

MY ANSWER:
function stringToArray(string){

	let stringToArray = string.split(" ")
  return string.split(" ")

}

/*notes:
stringToArray is the variable
the sentence is being seperated by a space between each word
 - that means that i want to split the sentence where the space is between the words
using the split() method would be a good option because looking at the sample test
the string is dividied into substrings in an array which is literally the split method
*/

//P string
//R return back an array of strings
//E 'Miggie Garcia' return ["Miggie", "Garcia"]
//Psuedo Code
// sentence is seperated by spaces between words
// get back a an array with each word from the sentence
// display that array



//

/* What is the split() method?
  it breaks up the string into smaller strings and returns in an array
  in between the () parenthesis the arguement is called a seperator and different stuff happens in it
     - (" ") returns each word as a seperate string in the array
     - ('') each character returns as a seperate string in the array
     - ('o') remove the letter o in from the string and return an array with strings of words not having the letter o
what is fat arrow?
  it is a type of function expression but has limited features
  implicite return - don't need to write return because it is already doing it for you
     // for one parameter return is not needed but on a mullti-line statement it would reuire the word return
*/

//solving using split() brute force method or like function expression

// function stringToArray(string){
//  let stringToArray = string.split(" ")
//  return string.split(" ")
//   }


/* solving using arrow function or  fat arrow function:
 const stringToArray = (string) => string.split(' ')
*/
