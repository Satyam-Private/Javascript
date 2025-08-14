let h1 = document.querySelector("h1"); 

window.addEventListener("keydown" , function(dets){ 
    h1.textContent = dets.key;
})