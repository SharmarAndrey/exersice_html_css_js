// Сделай с помощью for...of:

/* Bring all users in format:
"Name: Andrey, Age: 42"

Calculate how many users are older than 30 years
(Count inside for for ... of)

Get a new array with the names of all adults
(manually add to adultnam.push () inside the cycle) */

/* const users = [
  { name: "Andrey", age: 42 },
  { name: "Olga", age: 28 },
  { name: "Max", age: 17 },
  { name: "Irina", age: 35 },
  { name: "Sergei", age: 19 },
]; */

/* for (let user of users) {
  console.log(`Name: ${user.name}`, "Age: ", user.age);
} */
/* let count = 0;
for (let user of users) {
  if (user.age > 30) {
    count++;
  }
}
console.log("count", count);

let adultNames = [];
for (let user of users) {
  if (user.age >= 18) {
    adultNames.push(user.name);
  }
}
console.log("adulyNames", adultNames); */

/* 🔹 Bring all users indicating the group:
"Group: Frontend, Name: Andrey, Age: 42"

🔹 Count the total number of participants in all groups

🔹 Collect an array of names of all adults (18+) in all groups */
const groups = [
  {
    groupName: "Frontend",
    members: [
      { name: "Андрей", age: 42 },
      { name: "Ирина", age: 28 },
    ],
  },
  {
    groupName: "Backend",
    members: [
      { name: "Сергей", age: 33 },
      { name: "Максим", age: 17 },
    ],
  },
];

for (let group of groups) {
  for (let member of group.members) {
    console.log(
      "Group:",
      group.groupName,
      ",",
      "member name: ",
      member.name,
      ",",
      "age: ",
      member.age,
    );
  }
}

let count = 0;
for (let group of groups) {
  count += group.members.length;
}
console.log("count", count);

const getAdultNames = (groups) => {
  let adults = [];
  for (let group of groups) {
    for (let member of group.members) {
      if (member.age >= 18) {
        adults.push(member.name);
      }
    }
  }
  return adults;
};

console.log("Adult Names: ", getAdultNames(groups));
