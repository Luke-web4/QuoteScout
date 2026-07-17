/*

====================================

 QUOTESCOUT STRIPE WEBHOOK

====================================

Receives payment updates.

Handles:

- Successful subscriptions

- Failed payments

- Cancellations

Plans:

Starter:

$50/month

Premium:

$120/month

====================================

*/

const database =

require("./database");

// PAYMENT SUCCESS

function paymentSuccessful(event){

    const subscription =

    event.subscription;

    const payment = {

        id:

        Date.now(),

        contractor:

        subscription.customer,

        plan:

        subscription.plan,

        amount:

        subscription.amount,

        status:

        "paid",

        date:

        new Date()

    };

    database.addPayment(

        payment

    );

    return payment;

}

// PAYMENT FAILED

function paymentFailed(event){

    return {

        status:

        "payment_failed",

        contractor:

        event.customer

    };

}

// SUBSCRIPTION CANCELLED

function subscriptionCancelled(event){

    return {

        status:

        "cancelled",

        contractor:

        event.customer

    };

}

module.exports = {

    paymentSuccessful,

    paymentFailed,

    subscriptionCancelled

};
