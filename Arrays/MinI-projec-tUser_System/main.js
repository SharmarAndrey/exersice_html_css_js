/* const users = [
  { name: "Андрей", age: 42 },
  { name: "Ирина", age: 35 },
  { name: "Максим", age: 17 },
  { name: "Ольга", age: 28 },
  { name: "Сергей", age: 19 },
]; */
//Conclusion of all users' names
/* console.log(
  "users",
  users.map((user) => user.name),
);

//Adult filtration (18+)
console.log(
  "adults",
  users.filter((user) => user.age >= 18),
);

//	Search for a user by name
console.log(
  'user "Ольга"',
  users.find((user) => user.name == "Ольга"),
);

//Sort users by age
console.log(
  "users sorted by age",
  users.sort((a, b) => a.age - b.age),
);

//Middle age
let totalage = users.reduce((acc, user) => acc + user.age, 0);
let averageAge = totalage / users.length;
console.log("averageAge", averageAge);

let mayor = users.reduce((acc, user) => Math.max(acc, user.age), 0);
console.log("mayor", mayor);
let youngest = users.reduce((acc, user) => Math.min(acc, user.age), Infinity);
console.log("youngest", youngest); */

/* const findUserByName = (name) => users.find((user) => user.name == name);

console.log(findUserByName("Сергей"));
 */

//Find user by name

/* findUserByName = (name) => users.find((users) => users.name === name);
console.log(findUserByName("Ольга")); */

/* const groupUsersByAge = (users) => {
  return {
    under18: users.filter((user) => user.age < 18),

    from18to30: users.filter((user) => user.age >= 18 && user.age <= 30),

    above30: users.filter((user) => user.age > 30),
  };
};
console.log("groupUsersByAge", groupUsersByAge(users));

const countUsersByGroup = (users) => {
  const groups = groupUsersByAge(users);
  return {
    under18: groups.under18.length,
    from18to30: groups.from18to30.length,
    above30: groups.above30.length,
  };
};
const printGroupStats = (groupCount) => {
  console.log(`👶 Младше 18: ${groupCount.under18} человек`);
  console.log(`🧑 От 18 до 30: ${groupCount.from18to30} человек`);
  console.log(`👴 Старше 30: ${groupCount.above30} человек`);
};

const groupCount = countUsersByGroup(users);
printGroupStats(groupCount);
 */

/* const userNames = users.map((user) => user.name);
console.log(userNames);

const adults = users.filter((user) => user.age >= 18);
console.log("adults", adults);

const findUser = users.find((user) => user.name === "Ольга");
console.log(findUser);

const sortByAge = users.sort((a, b) => a.age - b.age);
console.log("sortByAge", sortByAge);

let mediumAge = [...users].reduce((acc, user) => acc + user.age, 0);
mediumAge = mediumAge / users.length;
console.log(mediumAge);
 */
const cities = ["Москва", "Барселона", "Берлин"];
const greedCity = cities.map((city) => `Привет,  ${city} !`);
console.log(greedCity);

const numbers = [3, 7, 12, 4, 9, 20];
const greaterThanTen = numbers.filter((number) => number > 10);
console.log("greaterThanTen", greaterThanTen);

const users = [
  { name: "Андрей", age: 42 },
  { name: "Ирина", age: 35 },
  { name: "Максим", age: 17 },
  { name: "Ольга", age: 28 },
  { name: "Сергей", age: 16 },
];

const adults = users.filter((user) => user.age >= 18).map((user) => user.name);
console.log("adults", adults);

/* const adultsNames = adults.map((adult) => adult.name);
console.log("adultsNames", adultsNames);
 */

const findUser = users.find((user) => user.name === "Ольга");
console.log("Find User ", findUser);

const youngest = users.find((user) => user.age < 30);
console.log("youngest", youngest);
