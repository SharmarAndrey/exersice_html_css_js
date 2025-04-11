/* const numbers = [1, 5, 7, 10]; */

/* const suma = numbers.reduce((sum, num) => sum + num, 0); */

/* const suma = [...numbers].reduce((sum, num) => sum + num, 0);
console.log("suma", suma);

const users = [
  { name: "Андрей", age: 42 },
  { name: "Ольга", age: 28 },
  { name: "Максим", age: 17 },
];
 */
/* Calculation: 
 The amount of age
  Average age (amount / quantity)
  Enter the designations into the console */

/* const ageAmount = users.reduce((sum, user) => sum + user.age, 0);
console.log("ageAmount", ageAmount);

const averageAge = ageAmount / users.length;
console.log("averageAge", averageAge); */

/* const users = [
  { name: "Андрей", age: 42 },
  { name: "Ирина", age: 35 },
  { name: "Максим", age: 17 },
  { name: "Ольга", age: 28 },
  { name: "Сергей", age: 19 },
];

const olderUser = users.reduce(
  (acc, user) => Math.max(acc, user.age),
  users[0].age,
);
console.log("olderUser", olderUser);

const YoungerUser = users.reduce(
  (acc, user) => Math.min(acc, user.age),
  users[0].age,
);

console.log("YoungerUser", YoungerUser);

const allAges = users.reduce((acc, user) => [...acc, user.age], []);

console.log("allAges", allAges);
 */

/* const users = [
  { name: "Андрей", age: 42 },
  { name: "Ирина", age: 25 },
  { name: "Максим", age: 17 },
  { name: "Ольга", age: 28 },
  { name: "Сергей", age: 19 },
  { name: "Игорь", age: 25 },
]; */

/* const grouperdUsers = users.reduce((acc, user) => {
  const firstLetter = user.name[0];
  if (!acc[firstLetter]) {
    acc[firstLetter] = [];
  }

  acc[firstLetter].push(user);
  return acc;
}, {});

console.log("grouperdUsers", grouperdUsers); */

/* const sortUsersByAge = users.reduce((acc, user) => {
  let num = user.age;

  if (!acc[num]) {
    acc[num] = [];
  }
  acc[num].push(user);
  return acc;
}, {});

console.log("Sorted Users By Age", sortUsersByAge); */

/* const ages = users
  .filter((user) => user.age >= 18 && user.age <= 40)
  .reduce((acc, user) => {
    const num = user.age;
    if (!acc[num]) {
      acc[num] = [];
    }

    acc[num].push(user);
    return acc;
  }, {});

console.log("ages", ages); */

/* const ages = users.reduce((acc, user) => {
  if (user.age <= 20 || user.age >= 40) return acc;

  const num = user.age;
  if (!acc[num]) {
    acc[num] = [];
  }

  acc[num].push(user);
  return acc;
}, {});

console.log("ages", ages); */

//🧩 Task: to break users by age categories

/* const users = [
  { name: "Андрей", age: 42 },
  { name: "Ирина", age: 35 },
  { name: "Максим", age: 17 },
  { name: "Ольга", age: 28 },
  { name: "Сергей", age: 19 },
  { name: "Игорь", age: 25 },
];

const usersByCategory = users.reduce(
  (acc, user) => {
    if (user.age < 18) {
      acc.under18.push(user);
    } else if (user.age >= 18 && user.age <= 30) {
      acc.from18to30.push(user);
    } else {
      acc.above30.push(user);
    }

    return acc;
  },
  {
    under18: [],
    from18to30: [],
    above30: [],
  },
);

console.log("usersByCategory", usersByCategory); */

// Task: to calculate how many users fall into each age category

/* const users = [
  { name: "Андрей", age: 42 },
  { name: "Ирина", age: 35 },
  { name: "Максим", age: 17 },
  { name: "Ольга", age: 28 },
  { name: "Сергей", age: 19 },
  { name: "Игорь", age: 25 },
]; */

/* const ageCategory = users.reduce(
  (acc, user) => {
    if (user.age < 18) {
      acc.under18.push(user);
    } else if (user.age >= 18 && user.age <= 30) {
      acc.from18To30.push(user);
    } else {
      acc.above30.push(user);
    }
    return acc;
  },
  {
    under18: [],
    from18To30: [],
    above30: [],
  },
);
console.log("ageCategory", ageCategory); */

/* const ageCategory = users.reduce(
  (acc, user) => {
    if (user.age < 18) {
      acc.under18++;
    } else if (user.age >= 18 && user.age <= 30) {
      acc.from18To30++;
    } else {
      acc.above30++;
    }
    return acc;
  },
  {
    under18: 0,
    from18To30: 0,
    above30: 0,
  },
);
console.log("ageCategory", ageCategory); */

// Task: to calculate how many names begins for each letter
const users = [
  { name: "Андрей", age: 42 },
  { name: "Алена", age: 22 },
  { name: "Ольга", age: 28 },
  { name: "Игорь", age: 35 },
  { name: "Инна", age: 30 },
  { name: "Оксана", age: 31 },
];
/* const namesOfUsers = users.reduce((acc, user) => {
  const firsdtLetter = user.name[0];

  if (!acc[firsdtLetter]) {
    acc[firsdtLetter] = 0;
  }
  acc[firsdtLetter]++;

  return acc;
}, {});
console.log("namesOfUsers", namesOfUsers); */

const namesOfUsers = users.reduce((acc, user) => {
  if (user.name[0] in acc) {
    acc[user.name[0]]++;
  } else {
    acc[user.name[0]] = 1;
  }

  return acc;
}, {});
console.log("namesOfUsers", namesOfUsers);
