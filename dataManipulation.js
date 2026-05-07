// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
console.log("All 4 numbers: n1= "+ n1 +
     " n2= "+ n2 +" n3= "+ n3 +" n4= "+ n4);

/*Check if all numbers are divisible by 5 */
let isDivisibleByFive = (n1 + n2 + n3 + n4)%5 == 0;
console.log("Divisible by 5: "+ isDivisibleByFive);

//Check if the first number is larger than the last. Cache the result in a variable
let isN1Larger = n1 > n4;
console.log("n1 is larger: "+ isN1Larger);

/*Accomplish the following arithmetic chain:
Subtract the first number from the second number.
Multiply the result by the third number.
Find the remainder of dividing the result by the fourth number.
*/
let diffN1andN2 = n1 - n2;
let timesN3 = n3 * diffN1andN2;
let reminderN4 = timesN3 % n4;
console.log ("The different of n1 and n2: "+diffN1andN2 +"\n"+
    "Then times with n3: " + timesN3 +"\n"+
    "Then modulus to n4: "+reminderN4);

    /*
Change the way that isOver25 calculates so that we 
do not need to use the NOT operator (!) in other 
logic comparisons. Rename the variable as appropriate.*/

let isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log ("It is at least a number over 25: "+isOver25);


/*Part 2: Practical Math 
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?
Compare the results when traveling at an average of 55, 60, 
and 75 miles per hour. Which makes the most sense for the trip?
Log the results of your calculations using string concatenation
 or template literals.
*/
const totalTripDistance = 1500;
const speed55MilesFuelPergallon = 30;
const speed60MilesFuelPergallon = 28;
const speed75MilesFuelPergallon = 23;
const tripBudget = 175;
const fuelPergallon = 3;

//How many gallons of fuel will you need for the entire trip?
let fuelSpeed55 = totalTripDistance / speed55MilesFuelPergallon;
let fuelSpeed60 = totalTripDistance / speed60MilesFuelPergallon;
let fuelSpeed75 = totalTripDistance / speed75MilesFuelPergallon;

console.log("Total trip fuel in gallon at speed 55: " +fuelSpeed55 + "\n" +
            "Total trip fuel in gallon at speed 60: " +fuelSpeed60 + "\n" +
            "Total trip fuel in gallon at speed 75: " +fuelSpeed75
);

//Will your budget be enough to cover the fuel expense?
const budgetFuelInGallon = tripBudget / fuelPergallon;
let isBudgetSpeed55 = budgetFuelInGallon > fuelSpeed55 ;
let isBudgetSpeed60 = budgetFuelInGallon > fuelSpeed60 ;
let isBudgetSpeed75 = budgetFuelInGallon > fuelSpeed75 ;

console.log("Total budget fuel in gallon: " +budgetFuelInGallon + "\n" +
            "Is enough budget at 55 speed/mile: " +isBudgetSpeed55 + "\n" +
            "Is enough budget at 60 speed/mile: " +isBudgetSpeed60 + "\n" +
            "Is enough budget at 75 speed/mile: " +isBudgetSpeed75
);
//How long will the trip take, in hours?
let speed55MilesTripHours = totalTripDistance / 55;
let speed60MilesTripHours = totalTripDistance / 60;
let speed75MilesTripHours = totalTripDistance / 75;

console.log("Total trip hours at speed 55: " +speed55MilesTripHours + "\n" +
            "Total trip hours at speed 60: " +speed60MilesTripHours + "\n" +
            "Total trip hours at speed 75: " +speed75MilesTripHours
);

/*Compare the results when traveling at an average of 55, 60, 
and 75 miles per hour. Which makes the most sense for the trip?*/
//Better choice when is covered the budget and less hours to travel.
let isSpeed55BetterTrip = ((speed55MilesTripHours < speed60MilesTripHours) && isBudgetSpeed55)
                        || ((speed55MilesTripHours < speed75MilesTripHours) && isBudgetSpeed55);

let isSpeed60BetterTrip = ((speed60MilesTripHours < speed55MilesTripHours) && isBudgetSpeed60)
                        || ((speed60MilesTripHours < speed75MilesTripHours) && isBudgetSpeed60);

let isSpeed75BetterTrip = ((speed75MilesTripHours < speed55MilesTripHours)  && isBudgetSpeed75)
                        || ((speed75MilesTripHours < speed60MilesTripHours) && isBudgetSpeed75);

console.log("Better trip choice when is covered the budget and less hours to travel.\n"+
            "Is it best trip choice at speed 55: " +isSpeed55BetterTrip + "\n" + 
            "Is it best trip choice at speed 60: " +isSpeed60BetterTrip + "\n" +
            "Is it best trip choice at speed 75: " +isSpeed75BetterTrip 
);
/*Part 2: Practical Math
Let’s look at a more practical scenario.
You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?
Compare the results when traveling at an average of 55, 60, 
and 75 miles per hour. Which makes the most sense for the trip?
Log the results of your calculations using string concatenation 
or template literals.

Part 3: Future Exploration
In all of the problems above, there are two tools that would 
make it much easier to implement the logic we need and to 
reuse the code to test with different values:
Control flow, which is how we conditionally determine what 
a program does next. For example, if we exceed our fuel budget, 
perhaps the program could automatically change the speed it is 
testing until it finds the optimal speed.
Functions, which are reusable blocks of code, allow us to run 
pieces of code multiple times without rewriting the code or 
changing the value of variables in the code itself, like we 
needed to do above.
We will explore control flow in the next lesson, and functions 
toward the end of the module. Until then, continue exploring 
with the variety of operators and data types available in 
JavaScript!

*/
