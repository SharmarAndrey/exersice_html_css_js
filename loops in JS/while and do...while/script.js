//  Bring all the numbers from 1 to 10 using While
/* let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
} */

//Count the sum of all numbers from 1 to 100 using While
/* let sum = 0;
let i = 1;
while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum);
 */

//Count the amount of numbers from 1 to 10

// derive an intermediate amount at every step

// and withdraw the total amount after the end of the cycle

/* let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;

  console.log("After adding ", i, " The amount is equal ", sum);
  i++;
}
console.log("The total amount is equal ", sum); */

//Derive all odd numbers from 1 to 30

/* let i = 1;
while (i <= 30) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
} */

//  Consider the sum of numbers starting with 1 until the amount becomes more than 1000

/* let sum = 0;
let i = 1;
while (sum < 1000) {
  sum += i;
  i++;
}
console.log(sum);
console.log("all calculed numbers", i - 1);
 */

/* let sum = 0;
let count = 0;
let input;

while (true) {
  input = Number(prompt("Enter the number (0 - for exit):"));

  if (input === 0) {
    break;
  }

  sum += input;
  count++;
}

console.log("The sum of all numbers:", sum);
console.log("The number of introduced numbers:", count); */

//Do...while

/* Make a program using Do ... While, which:

Shows Prompt ("Enter password")

If the password is incorrect, he asks again

If the password is correct (for example, "Secret") - displays ALERT ("access permitted")

📌 Use Do ... While and line comparison */
let password;
do {
  password = prompt("Enter password");
  console.log("Введено значение:", password);
  if (password !== "123456") {
    alert("Incorrect password");
  }
} while (password !== "123456");

alert("access permitted");
