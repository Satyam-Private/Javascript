let btn = document.querySelector(".date-btn"); 
let date_disp = document.createElement("p");

let dispay = document.querySelector(".disp");

btn.addEventListener("click"  , function(){ 
    const todays_date = new Date(); 
    date_disp.textContent = "todays date info is " + todays_date; 
    dispay.append(date_disp); 


})