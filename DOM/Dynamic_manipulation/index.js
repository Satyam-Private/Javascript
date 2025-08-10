let div = document.querySelector("div"); 

let h2 = document.createElement("h2"); 
h2.textContent = "hii i am fine"; 

div.append(h2);  // append means you are adding at last 

// now lets add it first 

let h3 = document.createElement("h3"); 
h3.textContent = "hiii this is prepended later to document "; 

document.querySelector("div").prepend(h3)   


// now lets change the style of the element 

let divEle = document.querySelector("h1"); 
console.log(divEle);

divEle.style.color = "red";



