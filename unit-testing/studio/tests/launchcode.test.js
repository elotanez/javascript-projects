// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

it("should pass the value of organization as 'nonprofit ", function(){
  let result = launchcode.organization
  expect(result).toBe('nonprofit');
});

it("should pass the value of 'executiveDirector' as 'Jeff'", function(){
let result = launchcode.executiveDirector;
expect(result).toBe("Jeff")
});

it("should pass the value of 'percentageCoolEmployees' as '100'", function(){
  let result = launchcode.percentageCoolEmployees;
  expect(result).toBe(100)
});

it("should contain the value 'Web Development', 'Data Analysis', 'Liftoff' in the key 'programsOffered'", function(){
  let result = launchcode.programsOffered;
  expect(result).toContain("Web Development");
  expect(result).toContain("Data Analysis");
  expect(result).toContain("Liftoff");
  expect(launchcode.programsOffered.length).toEqual(3);
});

describe("should have a method called launchOutput, which", function () {

  it("should return 'Launch!' for numbers evenly divisible by 2", function () {
    expect(launchcode.launchOutput(2)).toEqual("Launch!");
  });
});

it("should return 'Code!' for numbers only divisible by 3", function () {
  expect(launchcode.launchOutput(3)).toEqual("Code!");
});

it("should return 'Rocks!' for numbers only divisible by 5", function () {
  expect(launchcode.launchOutput(5)).toEqual("Rocks!");
});

it("should return 'LaunchCode!' for numbers divisible by 2 and 3", function () {
  expect(launchcode.launchOutput(6)).toEqual("LaunchCode!")
});

it("should return 'Code Rocks!' for numbers evenly divisible by 3 and 5", function () {
  expect(launchcode.launchOutput(15)).toEqual("Code Rocks!")
});

it("should return 'Launch Rocks! (CRASH!!!!)' for numbers divisible by 2 and 5", function () {
  expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)")
});

it("should return 'LaunchCode Rocks!' for numbers divisible by 2,3, and 5", function () {
  expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!")
});

it("should return 'Rutabagas! That doesn't work.' for numbers not divisible by 2,3, or 5", function () {
  expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.")
})
});