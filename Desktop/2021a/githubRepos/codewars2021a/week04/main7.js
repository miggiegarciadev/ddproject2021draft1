// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)

link:

Holiday VI - Shark Pontoon 8kyu

instructions: 

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){ //(Parameters are variables listed as a part of the function definition.)variables that were given by word problem
    if (dolphin === true){
    let newSharkSpeed = sharkSpeed/2 // i created a new variable called newSharkSpeed b/c the sharkSpeed is cut in half if the boolean is true which is the dolphin
      if (pontoonDistance/youSpeed < sharkDistance/newSharkSpeed){ 
      return "Alive!" // if how long it takes me to get to safety (pontoon) is less than the time it takes thhe shark to catch to up me i am do not die (ALIVE)
      }else{
      return "Shark Bait!" // if all else fails aka the shark got to me before i got to safety (pontoon) i die (SHARK BAIT) 
      }
    } else{ //this is the shark swimming at his normal speed without the dolphin present 
      if ((pontoonDistance/youSpeed) < (sharkDistance/sharkSpeed)){
      return "Alive!" //if my time to get to safety (pontoon) is less than the time it takes the shark to reach me i do not die (ALIVE)
      }else{
      return "Shark Bait!" // if my time is slower to getto safety (pontoon) the shark is able to get to me and I die (SHHARK BAIT) 
      }

}
}
