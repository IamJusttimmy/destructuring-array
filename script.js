'use strict';

const resturant = {
  name: 'Classico Italiano',
  location: 'Nia Angelo Tavanti 23, Firenze Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Brushetta', 'Garlic Bread', 'Caprese Salad'],
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
      open: 0, //opens 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} and ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

//Rest Pattern and Parameters

//1.) Destructuring
//Spread, beacuse on Right side of =
const arr = [1, 2, ...[3, 4]];

//Rest pattern because on Left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...resturant.mainMenu,
  ...resturant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//objects
const { sat, ...weekdays } = resturant.openingHours;
console.log(weekdays);

//2.) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

resturant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
resturant.orderPizza('mushroom');

/*
/////////////////////////////

// The spread operator (...)
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...resturant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const naimMenuCopy = [...resturant.mainMenu];

//Join 2 arrays or more
const menu = [...resturant.starterMenu, ...resturant.mainMenu];
console.log(menu);

//Iterables: array, string, maps, sets. Not objects
const str = 'Timmy';
const letters = [...str, '', 'S.'];
console.log(letters);

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log(ingredients);

resturant.orderPasta(...ingredients);

//Objects
const newResturant = { foundedIn: 1998, ...resturant, founder: 'Guiseppe' };
console.log(newResturant);

const resturantCopy = { ...resturant };
resturantCopy.name = 'Ristorante Roma';
console.log(resturantCopy.name);
console.log(resturant.name);


/////////////////////////////
resturant.orderDelivery({
  time: '22:30',
  address: 'Voa del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

resturant.orderDelivery({
  address: 'Voa del sole, 21',
  starterIndex: 1,
});

//destructuring Objects
const { name, openingHours, categories } = resturant;
console.log(name, openingHours, categories);

const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = resturant;
console.log(resturantName, hours, tags);

//default variable
const { manu = [], starterMenu: starters = [] } = resturant;
console.log(menu, starters);

//mutaing variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested object
const {
  fri: { open: o, close: c },
} = openingHours;
comsole.log(o, c);


/////////////////////////////////////
//distructuring array
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

const [first, , second] = resturant.categories; //this will skip the second element'
console.log(first, second);

//to switch variables
let [main, secondary] = resturant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Recieve 2 return value from a function
const [starter, mainCourse] = resturant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p, q, r] = [8, 9];
console.log(p, q, r);
*/
