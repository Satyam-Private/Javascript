let head_tag  = document.querySelector("h1")

console.dir(head_tag);


head_tag.innerText = "hey you changed this text"; 


let divs = document.querySelectorAll("div"); 
console.dir(divs)


divs[0].innerText = "this is changed text";
divs[1].innerText = "i have changed this text also";


h2_tag = document.querySelectorAll("#querySelector"); 
console.dir(h2_tag);

h2_tag[0].innerHTML = "<i> i changed this to italic </>"; 
h2_tag[1].innerHTML = "<strong> i made the text bold </strong>"; 