document.addEventListener("DOMContentLoaded", function () {

    console.log("Storage Solutions website loaded");

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function(event) {

            event.preventDefault();

            alert(

                "Thanks for contacting us! We will get back to you soon."

            );

            contactForm.reset();

        });
// Smooth scrolling for navigation links

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(

            link.getAttribute("href")

        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Simple button interaction

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {

    button.addEventListener("mouseenter", function() {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", function() {

        button.style.transform = "scale(1)";

    });

});


    }

});
// Display current year automatically in footer

const footerText = document.querySelector("footer p");

if (footerText) {

    const year = new Date().getFullYear();

    footerText.innerHTML =

        "© " + year + " Storage Solutions. All rights reserved.";

}

// Basic form validation

const inputs = document.querySelectorAll(

    ".contact-form input, .contact-form textarea"

);

inputs.forEach(function(input) {

    input.addEventListener("input", function() {

        if (input.value.trim() !== "") {

            input.style.border = "2px solid green";

        } else {

            input.style.border = "none";

        }

    });

});
