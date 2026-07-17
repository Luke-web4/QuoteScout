/*

====================================

 QUOTESCOUT CONTRACTOR LOGIN

====================================

Handles:

- Contractor sign in

- Account verification

- Dashboard access

Later connects to:

- Secure database

- Encrypted passwords

- Subscription status

====================================

*/

const loginForm =

document.getElementById(

"contractorLogin"

);

if(loginForm){

loginForm.addEventListener(

"submit",

async function(event){

event.preventDefault();

const email =

document.getElementById(

"email"

).value;

const password =

document.getElementById(

"password"

).value;

const message =

document.getElementById(

"loginMessage"

);

try{

const response =

await fetch(

"/api/contractor/login",

{

method:"POST",

headers:{

"Content-Type":

"application/json"

},

body:JSON.stringify({

email,

password

})

}

);

const result =

await response.json();

if(result.success){

localStorage.setItem(

"quoteScoutContractor",

email

);

window.location.href =

"dashboard.html";

}

else{

message.innerHTML =

"Invalid login information.";

}

}

catch(error){

message.innerHTML =

"Login error. Try again.";

}

});

}
