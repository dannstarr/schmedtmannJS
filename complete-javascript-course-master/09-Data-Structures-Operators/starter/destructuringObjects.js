// Starter Data
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // pass an object into a method for immediate destructuring
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
//the object passed in for immediate destructuring must contain the same properties as the method parameters ^
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via de sol, 21',
  mainIndex: 2,
  starterIndex: 0,
});

// need to specify the exact names as listed in the object - and use curly braces.
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// If we want to rename the variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// Need to wrap it in ( )
({ a, b } = obj);
console.log(a, b);

// Nested objects
// We have already destructired "openingHours" above

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
