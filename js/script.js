// CONTACT FORM


// Get the contact form and the message area
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

// Handle the form submission without reloading the page
form.addEventListener("submit", function (event) {
    event.preventDefault();

   
    message.textContent =
        "Thank you! Your message has been received.";

   
    form.reset();
});