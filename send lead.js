/*

====================================

 QUOTESCOUT LEAD DISTRIBUTION

====================================

Owner tools:

- View customer quote

- Select contractors

- Send lead

Only subscribed contractors

should receive leads.

Plans:

Starter:

$50/month

Premium:

$120/month

====================================

*/

const quoteInfo =

document.getElementById("quoteInfo");

const sendButton =

document.getElementById("sendLead");

const message =

document.getElementById("message");

// LOAD QUOTE INFORMATION

async function loadQuote(){

    try{

        const response =

        await fetch(

        "/api/admin/quotes/latest"

        );

        const quote =

        await response.json();

        quoteInfo.innerHTML = `

        <p>

        <strong>Customer:</strong>

        ${quote.name}

        </p>

        <p>

        <strong>Service:</strong>

        ${quote.service}

        </p>

        <p>

        <strong>Location:</strong>

        ${quote.location}

        </p>

        <p>

        <strong>Details:</strong>

        ${quote.details}

        </p>

        `;

    }

    catch(error){

        quoteInfo.innerHTML =

        "Could not load quote.";

    }

}

// SEND LEAD

sendButton.addEventListener(

"click",

async function(){

const selected =

document.querySelectorAll(

"input[type='checkbox']:checked"

);

if(selected.length === 0){

    message.innerHTML =

    "Select at least one contractor.";

    return;

}

const response =

await fetch(

"/api/admin/send-lead",

{

method:"POST",

headers:{

"Content-Type":

"application/json"

},

body:JSON.stringify({

contractors:

selected.length,

status:

"sent"

})

});

const result =

await response.json();

message.innerHTML =

"Lead sent successfully!";

});

loadQuote();
