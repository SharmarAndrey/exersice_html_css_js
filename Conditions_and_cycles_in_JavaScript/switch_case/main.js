const getDayName = (number) => {
  switch (number) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "There is no such day of the week";
  }
};
console.log(getDayName(3));
console.log(getDayName(9));

function getGradeDescription(score) {
  switch (score) {
    case 5:
      return "Excellent";
    case 4:
      return "Good";
    case 3:
      return "Average";
    case 2:
      return "Below average";
    case 1:
      return "Bad";
    default:
      return "There is no such grade";
  }
}

console.log(getGradeDescription(5));
console.log(getGradeDescription(0));

function getTimeOfDay(hour) {
  switch (hour) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Ночь";
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return "Утро";
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      return "День";
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      return "Вечер";
    default:
      return "Некорректный час";
  }
}

// Примеры:
console.log(getTimeOfDay(9)); // → Утро
console.log(getTimeOfDay(15)); // → День
console.log(getTimeOfDay(22)); // → Вечер
console.log(getTimeOfDay(25)); // → Некорректный час
