/*
====================================
 QUOTESCOUT CONTRACTOR DASHBOARD
====================================

Shows contractor:

- Subscription plan
- Received leads
- Lead status

Plans:

Starter:
$50/month

Premium:
$120/month

====================================
*/


const leadTable =
document.querySelector("table");





// LOAD CONTRACTOR LEADS


async function loadLeads(){


    try{


        const response =
        await fetch(
        "/api/contractor/leads"
        );



        const leads =
        await response.json();





        if(leads.length === 0){

            return;

        }







        leadTable.innerHTML = `


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


        </tr>


        `;







        leads.forEach(
        lead => {


            leadTable.innerHTML += `


            <tr>


            <td>
            ${lead.name}
            </td>


            <td>
            ${lead.service}
            </td>


            <td>
            ${lead.location}
            </td>


            <td>
            ${lead.status}
            </td>


            </tr>


            `;


        });





    }


    catch(error){


        console.log(
        "Could not load contractor leads"
        );


    }


}






loadLeads();
