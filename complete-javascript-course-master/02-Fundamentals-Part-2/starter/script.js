// //Activating Strict Mode
// `use strict`

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// // const interface = 'Audio';
// // const private = 534;


// ///////////////////////////////////////
// // Functions
// function logger() {
//   console.log('My name is Jonas');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');


// ///////////////////////////////////////
// // Function Declarations vs. Expressions

// // Function declaration
// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }
// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);


// ///////////////////////////////////////
// // Arrow functions

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


// ///////////////////////////////////////
// // Functions Calling Other Functions
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));


// ///////////////////////////////////////
// // Reviewing Functions
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// }

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3

// const dolphinAve = calcAverage(85, 54, 41)
// const koalaAve = calcAverage(23, 34, 27)

// console.log(dolphinAve, koalaAve)

// function checkWinner(dolphinAve, koalaAve) {
//     if (dolphinAve >= 2 * koalaAve) {
//         console.log(`Dolphins win (${dolphinAve} vs ${koalaAve})`)
//     }else if (koalaAve >= 2 * dolphinAve) {
//         console.log(`Koalas win (${koalaAve} vs ${dolphinAve})`)
//     } else {
//         console.log(`Scores are too close, no winners this time`)
//     }
// }

// checkWinner(dolphinAve, koalaAve)

let now = new Date();
  let year = now.getFullYear()
  console.log(year)

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    getSummary: function() {
        console.log(`${this.firstName} is ${year - this.birthYear} years old, and is a ${this.job}`)
        for (let i = 0; i <= jonas.friends.length - 1; i++) {
            console.log(`${this.firstName} is friends with ${this.friends[i]}`)
    }
  }
}
jonas.getSummary()

let dice = Math.trunc(Math.random() * 6 + 1)

while (dice !==6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    if(dice === 6) {
        console.log(`🏆🏆🏆 You WIN!!! 🏆🏆🏆`)
    }
    
}

// let tipPercent

// let bill = 430
// bill >= 50 && bill <= 300 ? tipPercent = 15/100: tipPercent = 20/100

// let tipValue = bill * tipPercent
// let total = bill + tipValue

// console.log(`The bill was ${bill}
//              the tip % was ${tipPercent * 100}%
//              the tip was ${tipValue}
//              and the total was ${total}`)

// const calcTip = function (bill) {
//   let tipPercent;
//   bill >= 50 && bill <= 300 ? (tipPercent = 15 / 100) : (tipPercent = 20 / 100);
//   let tip = bill * tipPercent;
//   return tip;
// };

// const bills = [125, 555, 44];
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []


// const calcTip = function(bill) {
//      return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2
// }

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i])
//     tips.push(tip)
//     totals.push(bills[i] + tip)
// }

// const calcAverage = function(arr) {
//     let sum = 0
    
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     let average = sum / arr.length
// return average
// }

// console.log(tips, totals)
// console.log(calcAverage(totals))
// console.log(calcAverage(tips))  

const notVATprice = [195, 132, 75, 35, 78, 98, 100]
const vat = 0.2
const myPrice = []

const calcVat = function(price) {
    return price * vat
}

const repairPrice = function(price) {
    for(let i = 0; i < price.length; i++) {
    let sum = price[i]
    sum += calcVat(price[i])
    sum += 6.99
    sum += 35
    sum = sum * 0.018 + sum
    myPrice.push(sum)
    }
    // console.log(myPrice)
    return 
}

repairPrice(notVATprice)
console.log(myPrice)

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i])
    totals[i] = bills[i] + tips[i]
}

console.log(tips, totals)


// let days = []
// for(i = 0; i < 7; i++)
// days[i] = [new Date().getDay()]

// console.log(days)

// let today = new Date()
// today = today.getDay()
// console.log(today)

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// let today = new Date().getDay()

console.log(days[new Date().getDay()])
