// juliaDogs1 = [3, 5, 2, 12, 7]
// kateDogs1 = [4, 1, 15, 8, 3]
// juliaDogs2 = [9, 16, 6, 8, 3]
// kateDogs2 = [10, 5, 6, 1, 4]

// const checkDogs = function(dogs1, dogs2) {
//     let dogs1Corrected = dogs1.slice(1, -2)
//     let allDogs = dogs1Corrected.concat(dogs2)

//     allDogs.forEach(function(dog, i) {
//         if(dog <= 2) {
//             console.log(`Dog number ${i + 1} is still a puppy and is ${dog} years old`)
//         }else {
//             console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`)
//         }
//     })
// }
// checkDogs(juliaDogs1, kateDogs1)
// console.log(`//// **** ////`)
// checkDogs(juliaDogs2, kateDogs2)

/////////---*** Challenge 2 ---*****//////


// const calcAveHumanAge = function(ages) {
//     const humanAges = ages.map(function(age) {
//         return age <= 2 ? 2 * age : 16 + age * 4
//     })
//     const adults = humanAges.filter(function(age) {
//         return age > 17
//     })
//     const totalHumanAge = adults.reduce(function(acc, cur) {
//         return acc + cur
//     }, 0)
//     const aveHumanAge = totalHumanAge / adults.length
//     console.log(aveHumanAge)
// }

const calcAverageHumanAge = (ages) => 
  ages
    .map(age => age < 2 ? 2 * age : 16 + age * 4)
    .filter(age => age > 17)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0)


const data1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const data2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

console.log(data1, data2)

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const owners = ['Jonas', 'Zach', 'Katie', 'Donna', 'Sarah']

const ownersSorted = owners.sort()

console.log(owners)
console.log(ownersSorted)


console.log(movements1)
movements1.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
})

console.log(movements1)