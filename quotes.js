/*
====================================
 QUOTESCOUT QUOTE REQUESTS
====================================

Loads customer quote requests
for the owner dashboard.

Displays:

- Customer name
- Service needed
- Location
- Project details
- Status

====================================
*/


const quoteTable =
document.querySelector("table");





async function loadQuotes(){


    try {


        const response =
        await fetch(
        "/api/admin/quotes"
        );



        const quotes =
        await response.json();





        if(quotes.length === 0){


            return;


        }






        quoteTable.innerHTML = `


        <tr>

        <th>
        Customer
        </th>


        <th>
        Service
        </th>


        <th>
        Location
        </th>


        <th>
        Status
        </th>


        <th>
        Action
        </th>


        </tr>


        `;







        quotes.forEach(
        quote => {



        quoteTable.innerHTML += `


        <tr>


        <td>
        ${quote.name}
        </td>


        <td>
        ${quote.service}
        </td>


        <td>
        ${quote.location}
        </td>


        <td>
        ${quote.status}
        </td>


        <td>

        <button>
        Send To Contractors
        </button>

        </td>


        </tr>


        `;



        });



    }


    catch(error){


        console.log(
        "Could not load quotes",
        error
        );


    }



}


