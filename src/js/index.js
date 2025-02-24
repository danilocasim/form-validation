import style from "../css/style.css";

import { Status } from "./errors";

const email = document.querySelector("#email");
const form = document.querySelector("form");

email.addEventListener("blur", () => {
  Status.email();
});

form.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    Status.email();
    e.preventDefault();
  }
});
