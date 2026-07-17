*
====================================
 QUOTESCOUT QUOTE ROUTES
====================================

Handles customer quote requests.

Owner can view:

- Customer information
- Service requested
- Location
- Project details
- Status

====================================
*/


const express = require("express");

const router = express.Router();


const database =
require("./database");








// ================================
// CUSTOMER SUBMITS QUOTE REQUEST
// ================================


router.post(
"/quote-request",
(req,res)=>{


    const quote = {


        id:
        Date.now(),


        name:
        req.body.name,


        email:
        req.body.email,


        phone:
        req.body.phone,


        service:
        req.body.service,


        location:
        req.body.location,


        details:
        req.body.details,


        status:
        "New",


        date:
        new Date()


    };





    database.addQuoteRequest(
        quote
    );





    res.json({

        success:true,

        quote

    });


});









// ================================
// OWNER VIEW QUOTES
// ================================


router.get(
"/admin/quotes",
(req,res)=>{


    res.json(

        database.database.quoteRequests

    );


});








module.exports = router;
