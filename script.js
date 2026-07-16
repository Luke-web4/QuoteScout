/* =================================

   QUOTESCOUT WEBSITE SCRIPT

================================= */

document.addEventListener("DOMContentLoaded", function () {

    const quoteForm = document.querySelector("form");

    if (quoteForm) {

        quoteForm.addEventListener("submit", function(event) {

            event.preventDefault();

            const name = quoteForm.querySelector(

                'input[type="text"]'

            ).value.trim();

            const email = quoteForm.querySelector(

                'input[type="email"]'

            ).value.trim();

            const phone = quoteForm.querySelector(

                'input[type="tel"]'

            ).value.trim();

            const service = quoteForm.querySelector(

                "select"

            ).value;

            if (

                name === "" ||

                email === "" ||

                phone === "" ||

                service === "Select Service"

            ) {

                alert(

                    "Please complete all required fields before submitting."

                );

                return;

            }

            /*

              Future upgrade:

              This is where customer requests

              will be sent to a database,

              email system, or contractor matching engine.

            */

            const lead = {

                customerName: name,

                email: email,

                phone: phone,

                service: service,

                submittedAt:

                new Date().toISOString()

            };

            console.log(

                "New Quote Request:",

                lead

            );

            /*

              Temporary MVP redirect.

              Later this can send data

              to a backend.

            */

            window.location.href =

            "success.html";

        });

    }

    /*

       Smooth scrolling for buttons

    */

    const links =

    document.querySelectorAll(

        'a[href^="#"]'

    );

    links.forEach(function(link){

        link.addEventListener(

            "click",

            function(e){

                const target =

                document.querySelector(

                    this.getAttribute("href")

                );

                if(target){

                    e.preventDefault();

                    target.scrollIntoView({

                        behavior:"smooth"

                    });

                }

            }

        );

    });

});
