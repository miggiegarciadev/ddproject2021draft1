/*
Link: https://www.codewars.com/kata/51f9d93b4095e0a7200001b8/solutions/javascript

instructions:

Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn/how_many_light_sabers_do_you_own that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your functishould have a default parameter.

howManyLightsabersDoYouOwn("anyone else") === 0
howManyLightsabersDoYouOwn("Zach") === 18
howManyLightsabersDoYouOwn() ===

Params: name
Return: 18 (only for zach) 0r 0 (for everonye else)
Exampels:
ProgrammerName: "Adam" num of light sabers: 0
ProgrammerName:"Zach" num of light sabers: 18
ProgrammerName: "Miggie" num of light sabers: 0
Psuedo Code:
default param is name (pass in 'Zach')
function name is howManyLightsabersDoYouOwn
zach always has 18
everyone else 0 (maybe if else statement)


i know that:
*pay atten to the amount of equal signs
only Zack has 18 lightsabers, everyone else has 0 light sabers
*/

function howManyLightsabersDoYouOwn(name) {
  let how_many_light_sabers_do_you_own = 18
  //defined variable within the local scope
  if (name === "Zach"){
    //the triple equal makes a big difference
    return how_many_light_sabers_do_you_own
  }else {
    return 0
    // since i know that Zach is 18 every other name HAS to be 0
  }
}
