import errorIcon from "../assets/error.png";
import successIcon from "../assets/success.png";

export class Status {
  static #clearIconStatus() {
    const errorIcons = document.querySelectorAll(".icon-status");
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

  static email() {
    const email = document.querySelector("#email");
    const errorEmail = document.querySelector("#error-email");

    const addErrorIcon = () => {
      this.#clearIconStatus();
      this.#addErrorIcon("#email-icon-status");
    };

    const addSuccessIcon = () => {
      this.#clearIconStatus();
      this.#addSuccessIcon("#email-icon-status");
    };

    if (email.validity.valueMissing) {
      addErrorIcon();
      errorEmail.textContent = "Fill up the input.";
    } else if (email.validity.typeMismatch) {
      addErrorIcon();
      errorEmail.textContent = "Please input a valid email.";
    } else if (email.validity.patternMismatch) {
      addErrorIcon();
      errorEmail.textContent =
        "Invalid pattern. Example: casimdanilojr_bscs@plmun.edu.ph or [name]_[program]@plmun.edu.ph";
    } else if (email.validity.valid) {
      addSuccessIcon();
      errorEmail.textContent = "";
    }
  }
}
