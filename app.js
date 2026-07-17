/*

====================================

 QUOTESCOUT BACKEND STARTUP

====================================

Starts the backend server.

Connects:

Website

   ↓

API Routes

   ↓

Database

   ↓

Payments

====================================

*/

require("dotenv").config();

const express = require("express");

const cors = require("cors");

const routes =

require("./routes");

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

// API ROUTES

// ================================

app.use(

"/api",

routes

);

// ================================

// HOME TEST ROUTE

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
