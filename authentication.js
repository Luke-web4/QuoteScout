/*

====================================

 QUOTESCOUT AUTHENTICATION SYSTEM

====================================

User Roles:

OWNER

- Full dashboard access

- Revenue

- Payments

- Contractor applications

CONTRACTOR

- Own profile

- Own subscription

CUSTOMER

- Quote requests only

Later connects to:

- Secure login provider

- Encrypted passwords

- Database

====================================

*/

const users = [];

// CREATE USER ACCOUNT

function createUser(data){

    const user = {

        id:

        Date.now(),

        email:

        data.email,

        password:

        data.password,

        role:

        data.role || "customer"

    };

    users.push(user);

    return user;

}

// LOGIN CHECK

function login(email,password){

    const user =

    users.find(

        account =>

        account.email === email &&

        account.password === password

    );

    if(!user){

        return null;

    }

    return user;

}

// CHECK OWNER ACCESS

function isOwner(user){

    if(

        user &&

        user.role === "owner"

    ){

        return true;

    }

    return false;

}

// CHECK CONTRACTOR ACCESS

function isContractor(user){

    if(

        user &&

        user.role === "contractor"

    ){

        return true;

    }

    return false;

}

module.exports = {

    createUser,

    login,

    isOwner,

    isContractor

};
