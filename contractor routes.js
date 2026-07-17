/*

====================================

 QUOTESCOUT CONTRACTOR ROUTES

====================================

Handles contractor dashboard data.

Allows:

- Contractors to view their leads

- Owner to send leads

- Track lead status

Subscription plans:

Starter:

$50/month

Premium:

$120/month

====================================

*/

const express = require("express");

const router = express.Router();

const database =

require("./database");

// ================================

// GET CONTRACTOR LEADS

// ================================

router.get(

"/contractor/leads",

(req,res)=>{

    const contractorEmail =

    req.query.email;

    const leads =

    database.database.quoteRequests.filter(

        lead =>

        lead.contractor === contractorEmail

    );

    res.json(leads);

});

// ================================

// SEND LEAD TO CONTRACTOR

// ================================

router.post(

"/admin/send-lead",

(req,res)=>{

    const {

        quoteId,

        contractors

    } = req.body;

    const quote =

    database.database.quoteRequests.find(

        q =>

        q.id === quoteId

    );

    if(!quote){

        return res.json({

            success:false,

            message:

            "Quote not found"

        });

    }

    quote.contractors =

    contractors;

    quote.status =

    "Sent to contractors";

    res.json({

        success:true,

        message:

        "Lead sent successfully"

    });

});

module.exports = router;
