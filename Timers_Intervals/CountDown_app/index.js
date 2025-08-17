let text = document.querySelector("h1"); 

let count = 10;

let timer = setInterval(function(){ 
    if(count >= 0){ 
        text.textContent = count; 
        count--;
    }
    else{ 
            text.textContent = "Time is up!!!";
            clearInterval(timer);
    }
}, 1000);