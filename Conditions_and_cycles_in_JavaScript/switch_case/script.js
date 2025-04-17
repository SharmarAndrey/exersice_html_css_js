//Make the GetdayName (Number) function - which by the day of the day (1–7) returns the name of the day of the week:switch
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
getDayName(3);
console.log("🚀 ~ getDayName(3);:", getDayName(3));
getDayName(9);
console.log("🚀 ~ getDayName(9);:", getDayName(9));

const getGrade = (score) => {
  switch (true) {
    case score >= 90 && score <= 100:
      return "Excellent";
    case score >= 70 && score <= 89:
      return "Good";
    case score >= 50 && score <= 69:
      return "Average";
    case score >= 0 && score <= 49:
      return "Bad";
    default:
      return "There is no such grade";
  }
};

console.log(getGrade(80));

const getSeason = (month) => {
  switch (true) {
    case month === 12 || month === 1 || month === 2:
      return "Winter";
    case month === 3 || month === 4 || month === 5:
      return "Spring";
    case month === 6 || month === 7 || month === 8:
      return "Summer";
    case month === 9 || month === 10 || month === 11:
      return "Autumn";
    default:
      return "There is no such month";
  }
};

console.log(getSeason(5));

/* Task: Entering a profession - Conclusion of greetings
Make the GreetByrole (Role) function, which:

"admin"     ----   Welcome, admin!
"Manager"   ----   Hello, manager!
"Developer" ----   code to the studio, developer!
"Student"   ----   good luck in study, student!
Any other   ----   role is not recognized */

const greetByRole = (role) => {
  switch (role.toLowerCase()) {
    case "admin":
      return "Hello, admin!";
    case "manager":
      return "Hello, manager!";

    case "developer":
      return "Hello, developer!";
    case "student":
      return "Hello, student!";

    default:
      return "The role is not defined!";
  }
};

const input = prompt("Enter your role");
alert(greetByRole(input));
