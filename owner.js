/*

====================================

 QUOTESCOUT OWNER ACCOUNT SETUP

====================================

Creates the first owner account.

OWNER ACCESS:

- Revenue dashboard

- Payments

- Contractor applications

- Business analytics

IMPORTANT:

In production:

- Passwords are encrypted

- Accounts are stored in a database

- Never expose credentials publicly

====================================

*/

const auth =

require("./authentication");

function createOwnerAccount(){

    const owner =

    auth.createUser({

        email:

        "YOUR_OWNER_EMAIL",

        password:

        "CREATE_SECURE_PASSWORD",

        role:

        "owner"

    });

    return owner;

}

module.exports = {

    createOwnerAccount

};
