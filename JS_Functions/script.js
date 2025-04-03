//function declaration
/* 
function sayHello() {
  console.log("Привет, Андрей! Удачи в кодинге!");
}
sayHello(); */

//arrow function
/* const sayHi = () => console.log("Hi, Андрей! Удачи в кодинге!");
sayHi(); */

//function expression
/* const sayBye = function () {
  console.log("Bye, Андрей! Удачи в кодинге!");
};
sayBye(); */

//function with parametrs

/* const greed = (name) => {
  return `Привет, ${name}!`;
};

console.log(greed("Anatoly"));

const newName = greed("Andrey");
console.log(newName);

const greet = (name) => {
  return `Hello ${name}`;
};
const message = greet("Yabaclock");
console.log("message: " + message); */

// Function Calculator

// Calculates the sum of two numbers
/* const sum = (a, b) => {
  return a + b;
};
console.log("Sum 1 + 2 = " + sum(1, 2)); */

// Calculates the subtraction of two numbers
/* const subtract = (a, b) => {
  return a - b;
};
console.log("Subtract 10 - 1 = " + subtract(10, 1)); */

// Calculates the multiplication of two numbers
/* const multiply = (a, b) => {
  return a * b;
};
console.log("Multiply 2 * 2 = " + multiply(2, 2)); */

// Calculates the division of two numbers
/* const divide = (a, b) => {
  if (b === 0) {
    return "Error: division by zero";
  }
  return a / b;
};
console.log("Divide 10 / 2 = " + divide(10, 2));
console.log("Divide 5 / 0 = " + divide(5, 0)); */

//function check age

/* const canAccessSite = (age) => {
  if (age >= 18) {
    return "Доступ разрешён";
  } else {
    return "Доступ запрещён";
  }
};
console.log(`canAccessSite:  + ${canAccessSite(18)}`);
console.log(`canAccessSite:  + ${canAccessSite(17)}`); */

// Checks if a given number is even.
/* const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log("is number Even ? " + isEven(2));

function isEven2(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log("isEvan2(2);", isEven2(2));

const greetUser = (name, isAdmin) => {
  if (isAdmin === true) {
    return `Добро пожаловать, Админ ${name}!`;
  } else {
    return `Привет, ${name}`;
  }
};
console.log(greetUser(`Андрей, ${true}`)); */

//function maxOfThree
/* const maxOfThree = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  return c;
};

console.log(maxOfThree(-1, -3, -2)); */

/* const maxOfThree2 = (a, b, c) => {
  return Math.max(a, b, c);
};

console.log(maxOfThree2(-5, -3, -2)); */

//The difference between the maximum and minimum numbers.

const rangeDiff = (a, b, c) => {
  let maxNumber = Math.max(a, b, c);
  let minNumber = Math.min(a, b, c);
  return maxNumber - minNumber;
};
console.log(
  "Разница между максимальным и минимальным значением равна :  " +
    rangeDiff(5, 10, 15),
);
console.log(
  `Разница между максимальным и минимальным значением равна :   ${rangeDiff(
    5,
    10,
    15,
  )}`,
);
console.log(
  `Разница между максимальным и минимальным значением равна :   `,
  rangeDiff(5, 10, 15),
);
const rangeDiff2 = (a, b, c, d, e) =>
  Math.max(a, b, c, d, e) - Math.min(a, b, c, d, e);

console.log(
  "разница между Max number и min number равна : " + rangeDiff2(1, 2, 3, 4, 5),
);
