// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];

function selectRandomEntry(arr) {
  let index = Math.floor(Math.random()*arr.length);
  return arr[index]
};

// Code your buildCrewArray function here:

 function buildCrewArray(threeRandomEntries, animals) {
  let crew = [];
  for (let i=0; i < animals.length; i++) {
    if (threeRandomEntries.includes(animals[i].astronautID)) {
      crew.push(animals[i]);
    }
  }
  return crew
}
  




// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

let threeRandomEntries = [];

while (threeRandomEntries.length < 3) {
  let newRecruit = selectRandomEntry(idNumbers); 
  while (threeRandomEntries.includes(newRecruit) === false){
    threeRandomEntries.push(newRecruit);
  }
};
console.log(threeRandomEntries);

let selectedCrew = buildCrewArray(threeRandomEntries, animals);



// Code your template literal and console.log statements:
console.log(`${selectedCrew[0].name}, ${selectedCrew[1].name}, and ${selectedCrew[2].name} are going to space!`)