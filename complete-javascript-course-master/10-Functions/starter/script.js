'use strict';

// const flight = 'LH234'
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 2346558742,
// }

// const checkIn = function (flightNum, passenger) {

// }

// checkIn()

//*****---- lesson 131---------- */

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`)
//     };
// };

// const greeterHey = greet('Hey')
// greeterHey('Dan')
// greeterHey('Helen')

// greet('Hi')('John')

// ---As arrow functions----//
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greet('Hi')('Dan')

//*****--Lesson 132 */

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)

        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}
lufthansa.book(239, `Dan Brain`)
lufthansa.book(635, 'John Smith')
console.log(lufthansa)

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: [],
};

const book = lufthansa.book;

// // This does NOT work because it is now a regular function call - not a method. The 'this' keyword points to undefined, not the object which called it
// // book(23, 'Sarah Williams')


// Call methood
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

// Apply method - barely used now
// works in a similar way, but takes an array of arguements

const flightData = [583, 'George Cooper']
book.apply(swiss, flightData)
console.log(swiss)

// Not used due to a better way - spread operator with call method
book.call(swiss, ...flightData);