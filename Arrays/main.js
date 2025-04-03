let numbers = [1, 2, 3, 4, 5];

/* console.log(numbers.length);

console.log(numbers[0], numbers[numbers.length - 1]); */

/* const numbersSuma = () => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(numbersSuma()); */

/* let numberSum = (numbers) => {
  let suma = 0;
  for (let i = 0; i < numbers.length; i++) {
    suma += numbers[i];
  }
  return suma;
};

console.log(numberSum(numbers));
 */

/* numbers.forEach((number) => console.log(number));

numbers.forEach((number, i) => console.log(i, ":", number));

const doubleNumbers = numbers.map((number) => number * 2);
console.log("doubleNumbers", doubleNumbers);

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("evenNumbers", evenNumbers);

const moreThanThree = numbers.find((number) => number > 3);
console.log("moreThanThree", moreThanThree);
 */

const users = [
  { name: "Андрей", age: 42 },
  { name: "Ирина", age: 35 },
  { name: "Максим", age: 17 },
  { name: "Ольга", age: 28 },
];
/* 
const usersName = users.map((user) => user.name);
console.log("usersName", usersName);

const mayorDeEdad = users.filter((user) => user.age >= 18);
console.log("mayorDeEdad", mayorDeEdad);

const findOlga = users.find((user) => user.name === "Ольга");
console.log("findOlga", findOlga); */
/* 
const sortUsers = users.sort((a, b) => a.age - b.age);
console.log("sortUsers", sortUsers);

const edadTotal = users.reduce((acc, user) => acc + user.age, 0);
const edadPromedio = edadTotal / users.length;
console.log("edadPromedio", edadPromedio);
 */

/* console.log(users.map((user) => user.name));

console.log(users.filter((user) => user.age <= 35));

console.log(users.find((user) => (user.name = "Ольга"))); */

/* console.log(users.sort((a, b) => a.age - b.age)); */
/* 
let totalage = users.reduce((sum, user) => sum + user.age, 0);
let ageMedium = totalage / numbers.length;
console.log(ageMedium);
 */
