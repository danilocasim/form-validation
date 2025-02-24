import style from "../css/style.css";

import { Status } from "./status";

const email = document.querySelector("#email");
const country = document.querySelector("#country");
const postalCode = document.querySelector("#postalCode");
const password = document.querySelector("#password");

const passwordConfirmation = document.querySelector("#passwordConfirmation");
const form = document.querySelector("form");

email.addEventListener("blur", () => {
  Status.email();
});

country.addEventListener("blur", () => {
  Status.country();
  Status.postalCode();
});

postalCode.addEventListener("blur", Status.postalCode);

password.addEventListener("blur", Status.password);

passwordConfirmation.addEventListener("blur", Status.passwordConfirmation);

form.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    Status.email();
    e.preventDefault();
  } else if (!country.validity.valid) {
    Status.country();
    e.preventDefault();
  } else if (!postalCode.validity.valid) {
    Status.postalCode();
    e.preventDefault();
  } else if (!password.validity.valid) {
    Status.password();
    e.preventDefault();
  } else if (!passwordConfirmation.validity.valid) {
    Status.passwordConfirmation();
    e.preventDefault();
  }
});
