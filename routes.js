/*

====================================

 QUOTESCOUT API ROUTES

====================================

Connects:

Website

   ↓

Backend

   ↓

Database / Payments

Routes:

POST /contractor-application

POST /subscription

GET  /admin/dashboard

====================================

*/

const express = require("express");

const router = express.Router();

const server =

require("./server");

const stripe =

require("./stripe-subscriptions");

const admin =

require("./admin-dashboard");

// ================================

// CONTRACTOR APPLICATION

// ================================

router.post(

"/contractor-application",

(req,res)=>{

    const contractor =

    server.createContractorApplication(

        req.body

    );

    res.json({

        success:true,

        contractor

    });

});

// ================================

// CREATE SUBSCRIPTION

// ================================

router.post(

"/subscription",

(req,res)=>{

    const subscription =

    stripe.createSubscription(

        req.body

    );

    res.json(subscription);

});

// ================================

// OWNER DASHBOARD

// ================================

router.get(

"/admin/dashboard",

(req,res)=>{

    const stats =

    admin.getAdminStats();

    res.json(stats);

});

// ================================

// PAYMENT HISTORY

// ================================

router.get(

"/admin/payments",

(req,res)=>{

    res.json(

        admin.getPaymentHistory()

    );

});

// ================================

// CONTRACTOR APPLICATIONS

// ================================

router.get(

"/admin/applications",

(req,res)=>{

    res.json(

        admin.getContractorApplications()

    );

});

module.exports = router;
