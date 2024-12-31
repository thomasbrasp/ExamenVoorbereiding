const form = document.getElementById("contactform");
const errorList = document.getElementById("errorlist");
const successMessage = document.getElementById("success");

function hasValue(input) {
  if (input.value.trim() === "") {
    return showError(input);
  }
  return true;
}

function showError(input) {
  let inputName = input.name;
  let message = `The ${inputName} field is empty! Please fill in a value.`;
  // Maak een nieuw li element aan
  const li = document.createElement("li");
  // Voeg de tekst toe aan het li element
  li.textContent = message;
  // Voeg het li element toe als child element van je errorList
  errorList.appendChild(li);
}

function showSuccess() {
  let message = "We have received your message!";
  // Voeg de tekst toe aan het successMessage element
  successMessage.textContent = message;
}

function showAlert(name, email, message) {
  alert(`You have send a message.\n
    Name: ${name}\n
    Email: ${email}\n
    Message: ${message}`);
}

form.addEventListener("submit", (event) => {
  // stop de default submissie van je form
  event.preventDefault();

  // Verwijder de children van errorList en successMessage
  // Gebruik geen innerHTML -> kwetsbaar voor html injections
  errorList.textContent = "";
  successMessage.textContent = "";

  let nameValid = hasValue(form.elements["name"]);
  let emailValid = hasValue(form.elements["email"]);
  let messageValid = hasValue(form.elements["message"]);

  if (nameValid && emailValid && messageValid) {
    showAlert(
      form.elements["name"].value,
      form.elements["email"].value,
      form.elements["message"].value
    );
    showSuccess();
  }
});
