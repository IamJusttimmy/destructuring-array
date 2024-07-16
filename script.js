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
};

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

/*
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
