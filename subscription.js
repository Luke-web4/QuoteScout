/*

====================================

 QUOTESCOUT SUBSCRIPTION SYSTEM

====================================

Plans:

Starter:

$50/month

Premium:

$120/month

Handles:

- Creating subscriptions

- Tracking plans

- Updating payment status

IMPORTANT:

Real Stripe secret keys stay

on the private server only.

====================================

*/

const paymentConfig =

require("./payment-config");

// CREATE SUBSCRIPTION REQUEST

function createSubscription(data){

    const plan =

    paymentConfig.getPlan(

        data.plan

    );

    if(!plan){

        return {

            success:false,

            message:

            "Invalid plan"

        };

    }

    const subscription = {

        contractor:

        data.contractor,

        plan:

        plan.name,

        amount:

        plan.price,

        interval:

        plan.interval,

        status:

        "pending payment"

    };

    /*

    

    Future Stripe code:

    stripe.checkout.sessions.create({

        mode:"subscription",

        price:plan.price_id

    })

    */

    return {

        success:true,

        subscription

    };

}

// CANCEL SUBSCRIPTION

function cancelSubscription(subscription){

    subscription.status =

    "cancelled";

    return subscription;

}

module.exports = {

    createSubscription,

    cancelSubscription

};
