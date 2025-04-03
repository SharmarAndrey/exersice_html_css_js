let button = document.querySelector(".btn");
let footer = document.querySelector("footer");
let message = "Thanks for your contact";
let confirmationMessage = document.querySelector(".confirmation-message");

button.addEventListener("click", () => {
  if (!document.querySelector(".message")) {
    const p = document.createElement("p");
    p.textContent = message;
    p.classList.add("message");
    footer.appendChild(p);
  }
});

const form = document.querySelector("#form");
const input = document.querySelector("#name");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = input.value.trim();
  const email = emailInput.value.trim();

  if (name === "" || email === "") {
    alert("All fields are required.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  } else {
    /* alert(
      `Thanks for your contact, ${name}. We will get back to you at ${email}`,
    ); */
    /*  confirmationMessage.textContent = `Thanks for your contact, ${name}. We will get back to you at ${email}`; */
    const p = document.createElement("p");
    p.textContent = `Thanks for your contact, ${name}. We will get back to you at ${email}`;
    confirmationMessage.appendChild(p);

    form.reset();
  }
});
