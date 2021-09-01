// let js = "Amazing";
// console.log(40 + 8 + 23 - 10);

// let name = "Dan";
// console.log(name);

const age = 14;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Sarah can start driving licence 🚙`);
} else {
  console.log(`Sarah is just a baby. Please come back in ${18 - age} years`);
}

// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear
}

//Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear
console.log(`The birth year is ${calcAge3(1991)}`)

const fruitPieces = fruit => fruit * 4

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(fruitProcessor(5, 4));
