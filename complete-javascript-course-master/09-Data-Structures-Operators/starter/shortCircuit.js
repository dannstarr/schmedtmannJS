// Or operator
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

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, otherIngredients)
    }
};

console.log(3 || jonas)

// Can use ANY data type, can return ANY data type, and can be used for short circuiting

// If the first value is true, the second part will not even be read by javascript - its a short circuit

console.log('' || 'Jonas')
console.log(true || 'Jonas')
console.log(undefined || null)
console.log(undefined || 0 || '' || 'Hello' || 23 || null)

// Nullish Coalesing operator ?? - 
console.log('---NumGuests---')
restaurant.numGuests = 0
const guests1 = restaurant.numGuests ?? 10

console.log(guests1)

console.log('-----AND-----')

console.log(0 && 'Jonas')
console.log(7 && 'Jonas')

// Practical example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach')
}

// Is the same as
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')
