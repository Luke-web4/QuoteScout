/* ==================================

   QUOTESCOUT ADMIN SYSTEM

================================== */

/*

    TEMPORARY DEMO LOGIN

    This is NOT where the real password

    should live in production.

    Later this gets replaced with:

    - database authentication

    - encrypted passwords

    - user roles

    - owner permissions

*/

const ownerAccount = {

    email: "OWNER_EMAIL_HERE",

    role: "owner"

};

// LOGIN SYSTEM

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener(

        "submit",

        function(event){

            event.preventDefault();

            const email =

            document.getElementById("email").value;

            const password =

            document.getElementById("password").value;

            const error =

            document.getElementById("errorMessage");

            /*

                Placeholder authentication.

                Replace with secure backend later.

            */

            if(

                email === ownerAccount.email &&

                password.length > 0

            ){

                localStorage.setItem(

                    "quoteScoutOwner",

                    "true"

                );

                window.location.href =

                "dashboard.html";

            }

            else {

                error.innerHTML =

                "Invalid login information.";

            }

        }

    );

}

// DASHBOARD PROTECTION

if(

    window.location.pathname.includes(

        "dashboard.html"

    )

){

    const loggedIn =

    localStorage.getItem(

        "quoteScoutOwner"

    );

    if(loggedIn !== "true"){

        window.location.href =

        "login.html";

    }

}

// LOGOUT BUTTON

const logoutButton =

document.getElementById("logout");

if(logoutButton){

    logoutButton.addEventListener(

        "click",

        function(){

            localStorage.removeItem(

                "quoteScoutOwner"

            );

            window.location.href =

            "login.html";

        }

    );

}

/* ==================================

   FUTURE DATABASE CONNECTIONS

   These will later connect to:

   - Stripe payments

   - Contractor accounts

   - Customer leads

   - Revenue tracking

================================== */

function updateRevenue(){

    /*

       Future example:

       Starter:

       10 x $50 = $500

       Premium:

       5 x $120 = $600

       Total:

       $1,100/month

    */

}
