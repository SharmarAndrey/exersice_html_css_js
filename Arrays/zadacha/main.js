const users = [
  { name: "Иван", age: 15, city: "Москва" },
  { name: "Анна", age: 22, city: "Санкт-Петербург" },
  { name: "Олег", age: 31, city: "Москва" },
  { name: "Юля", age: 19, city: "Казань" },
  { name: "Сергей", age: 45, city: "Санкт-Петербург" },
];

const groupUsersByCity = (users) => {
  return {
    moscow: users.filter((user) => user.city === "Москва"),
    spb: users.filter((user) => user.city === "Санкт-Петербург"),
    kazan: users.filter((user) => user.city === "Казань"),
  };
};
console.log("groupUsersByCity", groupUsersByCity(users));
