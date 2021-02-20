const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

form.addEventListener("submit", event => {
    const errorElements = document.querySelectorAll(".errorIcon, .errorMessage");
    for (let element of errorElements) {
        element.remove();
    }
    for (let input of inputs) {
        if (!input.value) {
            event.preventDefault();
            createError(input, emptyField(input, "cannot be empty"));
        }
    }
    const emailFormat = /\S+@\S+\.\S+/;
    if (email.value && !email.value.match(emailFormat)) {
        event.preventDefault();
        createError(email, wrongFormat("Looks like this is not an email"));
    }
    document.querySelector("button").focus();
});

for (let input of inputs) {
    input.addEventListener("focus", () => input.classList.remove("errorInput"));
}

const createError = (element, message) => {
    const error = document.createElement("p");
    error.innerText = message;
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-exclamation-circle", "fa-2x");
    const iconSpan = document.createElement("span");
    iconSpan.append(icon);
    error.classList.add("loading");
    iconSpan.classList.add("loading");
    element.insertAdjacentElement("afterend", error);
    element.insertAdjacentElement("afterend", iconSpan);
    setTimeout(() => {
        element.classList.add("errorInput");
        error.classList.replace("loading", "errorMessage");
        iconSpan.classList.replace("loading", "errorIcon");
    }, 0);
};

const emptyField = (element, message) => `${element.placeholder} ${message}`;
const wrongFormat = message => message;