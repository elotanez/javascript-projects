
// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;
console.log("All systems are a go! Initiating space shuttle launch sequence.");
console.log("Date: " + date);
console.log("Time: " + time);
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Astronaut Count: " + astronautCount);
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Astronaut Status: " + astronautStatus);
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit) {
    console.log("Total Mass: "+ totalMassKg);
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp) {
    console.log("Fuel Temp: " + fuelTempCelsius);
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Fuel Level: " + fuelLevel)
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Weather: " + weatherStatus);
}
// Verify shuttle launch can proceed based on above conditions
if (astronautCount && astronautStatus && totalMassKg <= maximumMassLimit && fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp && fuelLevel && weatherStatus && preparedForLiftOff) {
    console.log("Have a safe trip astronauts!");
} else {
    console.log("Launch Aborted")
}