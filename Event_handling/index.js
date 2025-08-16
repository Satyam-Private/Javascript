let h1 = document.querySelector("h1"); 


h1.addEventListener("click" , function(){ 
    h1.textContent = "look my color is changed"; 
    h1.style.color = "red";

})

let p = document.querySelector("p"); 
console.dir(p);

p.addEventListener("dblclick", function(){ 
    p.style.fontStyle = "italic";

}); 

let input = document.querySelector(".my-input"); 

input.addEventListener("input" , function(event_data){ 
    alert("you typed " + event_data.data);
})

let colorChangeBlock = document.querySelector(".block"); 
colorChangeBlock.addEventListener("mouseover" , function(){ 
    colorChangeBlock.style.backgroundColor = "yellow"; 
})
colorChangeBlock.addEventListener("mouseout" , function(){ 
    colorChangeBlock.style.backgroundColor = "red"; 
})