/* =================================
   QUOTESCOUT PAYMENT SYSTEM
================================= */


/*
    This file handles the selected
    contractor plan.

    Starter = $50/month
    Premium = $120/month

    Later this connects to:
    - Stripe
    - Database
    - Contractor accounts
*/



const selectedPlan =
localStorage.getItem("quoteScoutPlan");



const planBox =
document.getElementById("selectedPlan");





if(selectedPlan === "premium"){


    planBox.innerHTML = `

        <h2>
        Premium Plan
        </h2>

        <div class="price">
        $120<span>/month</span>
        </div>

    `;


}





else {


    planBox.innerHTML = `

        <h2>
        Starter Plan
        </h2>

        <div class="price">
        $50<span>/month</span>
        </div>

    `;


}






// SAVE CONTRACTOR APPLICATION


const form =
document.querySelector("form");



if(form){


form.addEventListener(
"submit",
function(event){


event.preventDefault();



const application = {


business:
document.querySelector(
"input[type='text']"
).value,


email:
document.querySelector(
"input[type='email']"
).value,


phone:
document.querySelector(
"input[type='tel']"
).value,


service:
document.querySelector(
"select"
).value,


plan:
selectedPlan || "starter"



};





localStorage.setItem(

"quoteScoutApplication",

JSON.stringify(application)

);





alert(
"Application saved. Moving to payment..."
);



/*

Later:

Send contractor to Stripe checkout

*/




});

}
