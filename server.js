/*
====================================
 QUOTESCOUT BACKEND SERVER
====================================

Handles:

- Contractor applications
- Payments
- Owner dashboard data
- User access

Later connects to:
- Real database
- Stripe payments
- Authentication

====================================
*/


const database = require("./database");

const paymentConfig = require("./payment-config");





// ================================
// CONTRACTOR APPLICATION
// ================================


function createContractorApplication(data){


    const contractor = {


        id:
        Date.now(),


        business:
        data.business,


        email:
        data.email,


        phone:
        data.phone,


        service:
        data.service,


        plan:
        data.plan || "starter",


        status:
        "pending"


    };



    database.addContractor(contractor);



    return contractor;


}








// ================================
// PAYMENT RECORD
// ================================


function recordPayment(data){



    const payment = {


        id:
        Date.now(),


        contractor:
        data.contractor,


        plan:
        data.plan,


        amount:
        paymentConfig.getPlan(
            data.plan
        ).price,


        date:
        new Date()


    };



    database.addPayment(payment);



    return payment;


}









// ================================
// OWNER DASHBOARD DATA
// ================================


function getDashboardData(){


    let revenue = 0;



    database.database.payments.forEach(
        payment => {

            revenue += payment.amount;

        }
    );



    return {


        totalRevenue:
        revenue,


        contractors:
        database.database.contractors.length,


        payments:
        database.database.payments.length


    };


}








module.exports = {


    createContractorApplication,


    recordPayment,


    getDashboardData


};
