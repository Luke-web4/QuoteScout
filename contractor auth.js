/*

====================================

 QUOTESCOUT CONTRACTOR AUTH

====================================

Handles contractor login.

Checks:

- Email

- Password

- Contractor role

- Subscription status

Plans:

Starter:

$50/month

Premium:

$120/month

====================================

*/

const express =

require("express");

const router =

express.Router();

const database =

require("./database");

// ================================

// CONTRACTOR LOGIN

// ================================

router.post(

"/contractor/login",

(req,res)=>{

    const {

        email,

        password

    } = req.body;

    const contractor =

    database.database.users.find(

        user =>

        user.email === email &&

        user.password === password &&

        user.role === "contractor"

    );

    if(!contractor){

        return res.json({

            success:false,

            message:

            "Invalid contractor account"

        });

    }

    // Check subscription

    if(

        contractor.subscriptionStatus

        !== "active"

    ){

        return res.json({

            success:false,

            message:

            "Subscription inactive"

        });

    }

    res.json({

        success:true,

        contractor:{

            email:

            contractor.email,

            plan:

            contractor.plan

        }

    });

});

module.exports = router;
