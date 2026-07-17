/*

====================================

 QUOTESCOUT OWNER DASHBOARD DATA

====================================

Shows:

- Revenue

- Starter members

- Premium members

- Contractors

- Payments

Pricing:

Starter:

$50/month

Premium:

$120/month

====================================

*/

const database =

require("./database");

function getAdminStats(){

    let starterMembers = 0;

    let premiumMembers = 0;

    let monthlyRevenue = 0;

    database.database.contractors.forEach(

        contractor => {

            if(contractor.plan === "starter"){

                starterMembers++;

                monthlyRevenue += 50;

            }

            if(contractor.plan === "premium"){

                premiumMembers++;

                monthlyRevenue += 120;

            }

        }

    );

    return {

        starterMembers,

        premiumMembers,

        monthlyRevenue,

        totalContractors:

        database.database.contractors.length,

        totalPayments:

        database.database.payments.length,

        pendingApplications:

        database.database.contractors.filter(

            contractor =>

            contractor.status === "pending"

        ).length

    };

}

function getPaymentHistory(){

    return database.database.payments;

}

function getContractorApplications(){

    return database.database.contractors;

}

module.exports = {

    getAdminStats,

    getPaymentHistory,

    getContractorApplications

};
