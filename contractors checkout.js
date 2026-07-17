/* ==================================
   QUOTESCOUT CHECKOUT SYSTEM
================================== */


/*
    Subscription Pricing:

    Starter:
    $50/month

    Premium:
    $120/month


    Later this connects to Stripe
    for real payments.
*/



const plan =
localStorage.getItem(
"quoteScoutPlan"
) || "starter";



const checkoutPlan =
document.getElementById(
"checkoutPlan"
);



const payButton =
document.getElementById(
"payButton"
);





if(plan === "premium"){


checkoutPlan.innerHTML = `

<h2>
Premium Plan
</h2>

<div class="price">
$120<span>/month</span>
</div>

`;


}





else{


checkoutPlan.innerHTML = `

<h2>
Starter Plan
</h2>

<div class="price">
$50<span>/month</span>
</div>

`;



}





payButton.addEventListener(
"click",
function(){



const message =
document.getElementById(
"paymentMessage"
);



message.innerHTML =
"Preparing secure payment...";



/*

Future Stripe connection:

1. Send selected plan
2. Create subscription checkout
3. Contractor pays monthly
4. Save payment in database
5. Activate contractor account


*/


setTimeout(function(){


message.innerHTML =
"Payment system coming soon.";


},1000);



});
