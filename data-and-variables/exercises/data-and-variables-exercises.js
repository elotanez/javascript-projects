// Declare and assign the variables below
<<<<<<< HEAD
let nameShuttle = "Determination";
let speed = 17500;
let distanceMars = 225000000;
let distanceMoon = 384400;
const milesPerKilo = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof nameShuttle);
console.log(typeof speed);
console.log(typeof distanceMars);
console.log(typeof distanceMoon);
console.log(typeof milesPerKilo);
=======
let shuttleName = "Determination";
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
const milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKilometer);
>>>>>>> 977c7399dc81a470aecc945d2cc49c91b6d5b926
// Calculate a space mission below
let milesToMars = distanceToMars * milesPerKilometer;
let hoursToMars =  milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = distanceToMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon =  hoursToMoon / 24
// Print the results of the trip to the moon below
console.log( shuttleName + " will take " + daysToMoon + " days to reach Moon.");