const numbers = [14, 3, 7, 1, 99, 23];

const sortAsc = [...numbers].sort((a, b) => a - b);
const sortDesc = [...numbers].sort((a, b) => b - a);
console.log(sortAsc, sortDesc);

const users = [
  { name: "Андрей", age: 42 },
  { name: "Ирина", age: 35 },
  { name: "Максим", age: 17 },
  { name: "Ольга", age: 28 },
  { name: "Сергей", age: 19 },
  { name: "Игорь", age: 25 },
];

//Sort the massif of users by age:
const sortUsersByAge = [...users].sort((a, b) => a.age - b.age);

//Sort the massif of users by name:
const sortUsersByName = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log("sortUsersByAge", sortUsersByAge);
console.log("sortUsersByName", sortUsersByName);
