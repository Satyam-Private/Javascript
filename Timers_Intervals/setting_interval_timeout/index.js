let existing_tag = document.querySelector("h2");

let sto = setTimeout(function(){ 
  let Timeout = document.createElement("h3"); 
    Timeout.textContent = "this is inside the settimout"
    existing_tag.append(Timeout);
} , 3000)
let siv = setInterval(function(){ 
  let interval = document.createElement("h3"); 
    interval.textContent = "this is inside the interval"
    existing_tag.append(interval);
} , 3000)


let btn_clear_timeout = document.querySelector("#clear_timeout"); 
let btn_clear_interval = document.querySelector("#clear_interval");
btn_clear_timeout.addEventListener("click" , function(){ 
        clearTimeout(sto);
})

btn_clear_interval.addEventListener("click" , function(){ 
    clearInterval(siv);
})