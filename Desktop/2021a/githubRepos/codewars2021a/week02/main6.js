/*Link: https://www.codewars.com/kata/514a7ac1a33775cbb500001e/train/javascript

Instructions: 

This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results;
}


P empty 
R results
E need to figure out what is wrong
Psuedo code, after doing research and looking at th problem again, i realized the syntax was off cause return needs to be on one line
*/

function mystery() {
  var results = {sanity: 'Hello'};
  return results;
}


/*definitions:
in js a function is a first class object(b/c you can attach methods and properties to it) but what makes them different is that functions can be called 
a function without a return statement wll return a default value 
 - but in a constructor the the default value is what is attached(value) to the "this" keyword.
 */
