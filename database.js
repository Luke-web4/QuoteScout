/*

====================================

 QUOTESCOUT DATABASE STRUCTURE

====================================

Stores:

- Contractor accounts

- Subscription plans

- Payments

- Customer quote requests

Later this connects to:

- Supabase

- Firebase

- PostgreSQL

- MongoDB

====================================

*/

const database = {

    contractors: [],

    payments: [],

    quoteRequests: [],

    users: []

};

// ADD CONTRACTOR

function addContractor(contractor){

    database.contractors.push(contractor);

}

// ADD PAYMENT

function addPayment(payment){

    database.payments.push(payment);

}

// ADD CUSTOMER REQUEST

function addQuoteRequest(request){

    database.quoteRequests.push(request);

}

// FIND OWNER USERS

function getOwners(){

    return database.users.filter(

        user => user.role === "owner"

    );

}

module.exports = {

    database,

    addContractor,

    addPayment,

    addQuoteRequest,

    getOwners

};
