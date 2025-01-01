"use strict";
/*            <form action="#" class="contactform" id="contactform">
                <label for="name">name<span>*</span></label
                ><br/>
                <input id="name" name="name" type="text"/><br/>
                <label for="email">email<span>*</span></label
                ><br/>
                <input id="email" name="email" type="email"/><br/>
                <label for="message">message<span>*</span></label
                ><br/>
                <textarea id="message" name="message" rows="6"></textarea><br/>
                <input class="contactbtn" type="submit" value="Send"/>
            </form>*/

//The name field is empty! Please fill in a value.
//The email field is empty! Please fill in a value.
//The message field is empty! Please fill in a value.

const submitButton = document.querySelector(`.contactbtn`);
const contactForm = document.querySelector(`#contactform`);
const errorContainer = document.createElement(`div`);
contactForm.appendChild(errorContainer)

const nameErrorMessage = document.createElement(`p`);
const emailErrorMessage = document.createElement(`p`);
const messageErrorMessage = document.createElement(`p`);
const succesMessage = document.createElement(`p`);
succesMessage.classList.add(`succes`);
nameErrorMessage.textContent = `The name field is empty! Please fill in a value.`
emailErrorMessage.textContent = `The email field is empty! Please fill in a value.`
messageErrorMessage.textContent = `The message field is empty! Please fill in a value.`


submitButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    // errorContainer.innerHTML = "";
    const nameInputValue = document.querySelector(`#name`).value;

    if (nameInputValue === ``) errorContainer.appendChild(nameErrorMessage);
    else nameErrorMessage.remove();

    const emailInputValue = document.querySelector(`#email`).value;

    if (emailInputValue === ``) errorContainer.appendChild(emailErrorMessage);
    else emailErrorMessage.remove();

    const messageInputValue = document.querySelector(`#message`).value;

    if (messageInputValue === ``) errorContainer.appendChild(messageErrorMessage);
    else messageErrorMessage.remove();

    if (nameInputValue !== `` && emailInputValue !== `` && messageInputValue !== ``) {
        errorContainer.appendChild(succesMessage)

        succesMessage.textContent = `We successfully received your message`

        setTimeout(() => {
            alert(`You have sent a message.
            Name: ${nameInputValue}
            Email: ${emailInputValue}
            Message: ${messageInputValue}`);
        }, 1000);
    }
});


