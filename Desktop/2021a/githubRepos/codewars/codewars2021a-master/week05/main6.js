// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)


Calculate BMI 

// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// PREP 
// Parameters: weight, height
// Results: if bmi <= 18.5 return "Underweight"if bmi <= 25.0 return "Normal",if bmi <= 30.0 return "Overweight", if bmi > 30 return "Obese"
// Examples: 17= underweight || 23 = normal || 32 = obese 
// Psuedo Code: Based on the equation bmi = weight / height ^ 2 the program would calculate if the user is healthy or unhealthy (normal, underweight, obese, etc) based on the numbers in the result

function bmi(weight, height) { // the parameters are height and weight
  var bodyMass = weight / (height * height); // i declared the variable to bodyMass to calculate the bodymass but instead of exponent 2 since it wasnt working i did height times itself
  if (bodyMass <= 18.5) return "Underweight"
  if (bodyMass <= 25.0) return "Normal"
  if (bodyMass <= 30.0) return "Overweight"
  if (bodyMass > 30.0) return "Obese"
}
