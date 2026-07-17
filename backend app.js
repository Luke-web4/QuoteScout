/*

====================================

 QUOTESCOUT BACKEND STARTUP

====================================

Connects:

Website

   ↓

API Routes

   ↓

Database

   ↓

Payments

   ↓

Contractor Leads

====================================

*/

require("dotenv").config();

const express = require("express");

const cors = require("cors");

const routes =

require("./routes");

const contractorRoutes =

require("./contractor-routes");

const stripeRoutes =

require("./stripe-route");

const quoteRoutes =

require("./quote-routes");

const app = express();

// ================================

// MIDDLEWARE

// ================================

app.use(

cors()

);

app.use(

express.json()

);

// ================================

// API CONNECTIONS

// ================================

app.use(

"/api",

routes

);

app.use(

"/api",

contractorRoutes

);

app.use(

"/api",

quoteRoutes

);

app.use(

"/api",

stripeRoutes

);

// ================================

// TEST ROUTE

// ================================

app.get(

"/",

(req,res)=>{

    res.send(

    "QuoteScout Backend Running"

    );

});

// ================================

// START SERVER

// ================================

const PORT =

process.env.PORT || 3000;

app.listen(

PORT,

()=>{

console.log(

`QuoteScout server running on port ${PORT}`

);

});
