Code War 1
/////////////////////////////////////////////////////////////////////////////////////

//Link: wwww.codewars.com/kata/54fe05c4762e2e3047000add/train///javascript


//Instructions:

//Ahoy matey!

/* You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

You begin with writing a generic Ship class:

function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}

Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

draft - an estimate of the ship's weight based on how low it is in the water
crew - the count of crew on board

var titanic = new Ship(15, 10);

Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

Add the method

isWorthIt

to decide if the ship is worthy to loot. For example:

titanic.isWorthIt() // return false
This Kata teaches you the very basic of method creation. */


PREP:
P (Parameters: whats  coming into the function [input]): DRAFT & CREW
R(Returns: what is the result, what do you end up wtih?): this.draft - this.crew * 1.5 > 20
E(Examples: play with the idea, write down things that
  can actually happen): Test.assertEquals(emptyShip.isWorthIt(),false)
P(Psuedo Code: plain English what you want to happen, step by
  step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)
1. since its a constructor, i know that i need to capitalize the first letter of my data type
2. the function constructor is going to have the params of draft, crew passed in
3. using this keyword calling the objects of draft and crew
4. want to know it is worth it down on a simple math equation

Definitions:
The value of this, when used in an object, is the object itself.
It is considered good practice to name constructor functions with an upper-case first letter.



Answer:
class Ship { //the constructor function is named with an upper-case first letter
  constructor(draft,crew){

    this.draft = draft; //this. keyword belongs to the object draft
    this.crew = crew; //this. keyword belongs to object crew
  }
  isWorthIt(){
    return this.draft - this.crew * 1.5 > 20;
    //the above line is saying to return the draft value minus the crew value greater than or equal to 20 which would make it goood to loot
  }
}
