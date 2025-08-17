let UserName = document.querySelector("#name");
let Usermail = document.querySelector("#email");
const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


let form = document.querySelector("form"); 
form.addEventListener("submit" , function(evt){ 
    evt.preventDefault();
    
    let NameTestAns = nameRegex.test(UserName.value);
    if(!NameTestAns){ 
       let name_error =  document.querySelector("#Name_error");
      name_error.innerText = "please enter the correct name Again.";
      name_error.style.color = "red";
      NameTestAns = false;
    } 
    let emailTestAns = emailRegex.test(Usermail.value); 
    if(!emailTestAns){ 
    let email_error =  document.querySelector("#email_error");
      email_error.innerText = "please enter the correct email Again.";
      email_error.style.color = "red";
      emailTestAns = false;

    }

})