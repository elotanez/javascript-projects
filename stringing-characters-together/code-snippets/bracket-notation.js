let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);
let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);
cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " +  stateName;

console.log(location.length);
word = 'JavaScript';
console.log(word.slice(4).toUpperCase())
let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language);
let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);
console.log('Launch\nCode');
let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);