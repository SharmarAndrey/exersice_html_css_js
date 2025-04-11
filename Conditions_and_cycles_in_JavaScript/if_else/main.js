/* 🔹 You have a variable Temperature
Make a program that displays:

"Cold" - if <10

"Heat" - from 10 to 24

"Hot" - if 25 and above
 */
/* 
const temperature = 10;
if (temperature < 10) {
  console.log("Cold");
} else if (temperature < 25) {
  console.log("Heat");
} else {
  console.log("Hot");
}

const temp = (number) => {
  if (number < 10) {
    return "Cold";
  } else if (number >= 10 && number < 25) {
    return "Heat";
  } else number >= 25;
  return "Hot";
};
console.log("temperature is :", temp(26)); */

// 🧩 Task: to determine the age category

const categoryAge = () => {
  const age = parseInt(document.getElementById("input").value);
  if (age < 18) {
    document.getElementById("result").innerHTML = "Child";
  } else if (age >= 18 && age <= 64) {
    document.getElementById("result").innerHTML = "Adult";
  } else {
    document.getElementById("result").innerHTML = "Pensioner";
  }
};
document.getElementById("btn").addEventListener("click", categoryAge);
