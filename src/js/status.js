import errorIcon from "../assets/error.png";
import successIcon from "../assets/success.png";

class IconStatus {
  static #clearIconStatus(id) {
    const errorIcons = document.querySelectorAll(id + " .icon-status");
    errorIcons.forEach((icon) => {
      icon.remove();
    });
  }

  static #addErrorIcon(id) {
    const iconStatusWrapper = document.querySelector(id);
    const iconStatus = document.createElement("img");
    iconStatus.src = errorIcon;
    iconStatus.classList.add("icon-status");
    iconStatusWrapper.appendChild(iconStatus);
  }

  static #addSuccessIcon(id) {
    const iconStatusWrapper = document.querySelector(id);
    const iconStatus = document.createElement("img");
    iconStatus.src = successIcon;
    iconStatus.classList.add("icon-status");
    iconStatusWrapper.appendChild(iconStatus);
  }

  static addErrorIcon = (id) => {
    this.#clearIconStatus(id);
    this.#addErrorIcon(id);
  };

  static addSuccessIcon = (id) => {
    this.#clearIconStatus(id);
    this.#addSuccessIcon(id);
  };
}
export class Status {
  static email() {
    const email = document.querySelector("#email");
    const errorEmail = document.querySelector("#error-email");

    if (email.validity.valueMissing) {
      IconStatus.addErrorIcon("#email-icon-status");
      errorEmail.textContent = "Fill up the input.";
    } else if (email.validity.typeMismatch) {
      IconStatus.addErrorIcon("#email-icon-status");
      errorEmail.textContent = "Please input a valid email.";
    } else if (email.validity.patternMismatch) {
      IconStatus.addErrorIcon("#email-icon-status");
      errorEmail.textContent =
        "Invalid pattern. Example: casimdanilojr_bsit@plmun.edu.ph or [name]_[program]@plmun.edu.ph";
    } else if (email.validity.valid) {
      IconStatus.addSuccessIcon("#email-icon-status");
      errorEmail.textContent = "";
    }
  }

  static country() {
    const country = document.querySelector("#country");
    const errorCountry = document.querySelector("#error-country");

    if (country.validity.valueMissing) {
      IconStatus.addErrorIcon("#country-icon-status");
      errorCountry.textContent = "Please, select a country.";
    } else if (country.validity.valid) {
      IconStatus.addSuccessIcon("#country-icon-status");
      errorCountry.textContent = "";
    }
  }

  static postalCode() {
    const country = document.querySelector("#country").value;
    const postalCode = document.querySelector("#postalCode");
    const errorPostalCode = document.querySelector("#error-postal-code");

    const constraints = {
      philippines: [
        "^[0-9]{4}$",
        "Philippines postal code must have exactly 4 digits e.g. 1747",
      ],
      germany: [
        "^(D-)?\\d{5}$",
        "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
      ],

      switzerland: [
        "^(CH-)?\\d{4}$",
        "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
      ],
    };

    const constraint = new RegExp(constraints[country][0], "");

    if (postalCode.validity.valueMissing) {
      IconStatus.addErrorIcon("#postal-code-icon-status");
      errorPostalCode.textContent = "Enter your postal code.";
      postalCode.setCustomValidity("Enter your postal code.");
    } else if (constraint.test(postalCode.value)) {
      IconStatus.addSuccessIcon("#postal-code-icon-status");
      errorPostalCode.textContent = "";
      postalCode.setCustomValidity("");
    } else {
      IconStatus.addErrorIcon("#postal-code-icon-status");
      errorPostalCode.textContent = constraints[country][1];
      postalCode.setCustomValidity(
        "Philippines postal code must have exactly 4 digits e.g. 1747",
      );
    }
  }

  static password() {
    const password = document.querySelector("#password");
    const errorPassword = document.querySelector("#error-password");

    if (password.validity.valueMissing) {
      IconStatus.addErrorIcon("#password-icon-status");
      errorPassword.textContent = "Enter a password.";
    } else if (password.validity.patternMismatch) {
      IconStatus.addErrorIcon("#password-icon-status");
      errorPassword.textContent =
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    } else if (password.validity.valid) {
      IconStatus.addSuccessIcon("#password-icon-status");
      errorPassword.textContent = "";
    }
  }

  static passwordConfirmation() {
    const password = document.querySelector("#password");
    const passwordConfirmation = document.querySelector(
      "#passwordConfirmation",
    );
    const errorPasswordConfirmation = document.querySelector(
      "#error-password-confirmation",
    );

    if (
      password.value !== passwordConfirmation.value ||
      passwordConfirmation.value === ""
    ) {
      IconStatus.addErrorIcon("#password-confirmation-icon-status");
      errorPasswordConfirmation.textContent =
        "Please input the password same in password input";
      passwordConfirmation.setCustomValidity(
        "Please input the password same in password input",
      );
    } else {
      IconStatus.addSuccessIcon("#password-confirmation-icon-status");
      errorPasswordConfirmation.textContent = "";
      passwordConfirmation.setCustomValidity("");
    }
  }
}
