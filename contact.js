const name = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
   
   var errormessage = "";
      
    if(name.value === "" || name.value == null){
      
      errormessage+= "Please enter a name. ";

    }
    if(email.value === "" || email.value == null){
      
      errormessage+= "Please enter an email. ";

    }
    if(errormessage != ""){
      alert(errormessage);
    }
    
 });
 