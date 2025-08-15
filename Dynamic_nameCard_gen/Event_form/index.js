let formMainDiv = document.querySelector(".main"); 
let formMain = document.querySelectorAll("input");
console.dir(formMain);

let form = document.querySelector(".f1");
form.addEventListener("submit" , function(dets){ 
    dets.preventDefault();
    let card  = document.createElement("div");
// console.dir(card);
card.classList.add("card");

let img = document.createElement("img");
img.setAttribute("src" , formMain[0].value);
console.dir(img);
card.appendChild(img); 

let nameEle = document.createElement("h2"); 
nameEle.classList.add("name"); 
console.dir(nameEle);
nameEle.innerText = formMain[1].value;
card.appendChild(nameEle); 

let Occ = document.createElement("h4"); 
Occ.classList.add("occupation"); 
console.dir(Occ);
Occ.innerText = formMain[2].value; 
card.appendChild(Occ); 

let infor = document.createElement("p"); 
infor.classList.add("info"); 
console.dir(infor);
infor.innerText = formMain[3].value; 
card.appendChild(infor);

formMainDiv.append(card);
form.reset();
})




