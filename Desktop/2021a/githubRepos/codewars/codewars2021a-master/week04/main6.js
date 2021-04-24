// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)

Link:

Holiday VI - Shark Pontoon 8kyu

Instructions: 

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if (dolphin === true){
    let newSharkSpeed = sharkSpeed/2
      if (pontoonDistance/youSpeed < sharkDistance/newSharkSpeed){
      return "Alive!"
      }else{
      return "Shark Bait!"
      }
    } else{
      if ((pontoonDistance/youSpeed) < (sharkDistance/sharkSpeed)){
      return "Alive!"
      }else{
      return "Shark Bait!"
      }
}

}
