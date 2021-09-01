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

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  }

};
//the object passed in for immediate destructuring must contain the same properties as the method parameters ^
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via de sol, 21',
  mainIndex: 2,
  starterIndex: 0,
});

const arr = [7, 8, 9];
const spreadArr = [1, 2, 3, ...arr];
console.log(spreadArr);
console.log(...spreadArr)

const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Beer']
console.log(...newMenu)

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu)

// Works on all iterables - arrays, maps, strings, sets - not objects

// const ingredients = [prompt(`Let's make pasta! Ingredient 1?`), prompt(`Ingredient 2?`), prompt(`Ingredient 3?`)]
// console.log(ingredients)

// restaurant.orderPasta(...ingredients)

// Since 2018 - the spread operator also works on Objects, even though they aren't iterables
// Objects

const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe', }
console.log(newRestaurant)