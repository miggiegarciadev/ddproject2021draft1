// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)

Find the Difference in Age between Oldest and Youngest Family Members

// PREP:
// P- an array of ages
// R- 1. oldest age
//    2. youngest age 
//    3. difference below young & old
// E- [82, 15, 6, 38, 35] 
// youngest - 6 oldest - 82 diff 82-6=76 
// [6, 82, 76]
// P- single out oldest age = max of array 
// single out youngest age = min of array
// get difference  between oldest age and youngest age to get difference of ages



function differenceInAges(ages){
  var old = (Math.max.apply(null,ages));
  var young = (Math.min.apply(null,ages));
  var diff= old-young;
  answer = [young, old, diff];
  return answer
}

// for more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
