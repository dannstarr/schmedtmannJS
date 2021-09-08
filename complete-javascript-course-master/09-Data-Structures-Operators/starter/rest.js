// SPREAD, because on RIGHT side of operator

const arr = [1, 2, ...[3, 4, 5]]

// REST because on LEFT side of operator

const [a, b, ...others] = [1, 2, 3, 4, 5]

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

// Functions

const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    console.log(sum)

};

add(2, 3)
add(5, 3, 7, 2)

restaurant.orderPizza('peperoni', 'pinapple', 'achovies', 'cheese')