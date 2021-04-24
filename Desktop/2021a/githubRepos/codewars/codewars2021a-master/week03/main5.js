/*
link: https://www.codewars.com/kata/51c89385ee245d7ddf000001/train/javascript

instructions:
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Params: value
Return: "Value is 00005"
Example:
(solution(5),"Value is 00005")
(solution(109),"Value is 00109")
Psuedo Code:
1. console.log to see the test case b/c instructions not clear
2. number from solution gets put into a string
3. new string returns value from solution and "Value is ..."
4. set string1 to be first 1/2 of setence
5. set string 2 to be all the zeros
6. extra just the part i need from the parameter
7. return new string

 go from one string to another
element 1 (string 1) becomes the last element in string 2

test case
expected '5this is the value' to equal 'Value is 00005'

beginIndex
The zero-based index at which to begin extraction. If negative, it is treated as str.length + beginIndex. (For example, if beginIndex is -3, it is treated as str.length - 3.) If beginIndex is not a number after Number(beginIndex), it is treated as 0.

If beginIndex is greater than or equal to str.length, an empty string is returned.


function solution(value){
  //...

}

*/

function solution(value){
  var string1 = 'Value is '
  var string2 = '0000'
  return string1 + (string2 + value).slice(-5)
  //.slice(-5) is basically saying value.length-5 in order to extra the part of the value that I need
  //console.log("Value is " + ("00000" + value).slice(-5));
}
