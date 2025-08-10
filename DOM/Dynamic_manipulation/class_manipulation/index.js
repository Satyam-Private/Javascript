let divEle = document.querySelector("div");

console.dir(divEle);

console.dir(divEle.classList);

divEle.classList.add("Modified"); // this adds the class 

// to remove the class we can do 

divEle.classList.remove("Modified"); // this removes the class 

// now lets toggle the operation means if class is present it removes or if it is not then its adds the class 

divEle.classList.toggle("Modified"); 
// now previously we removed the class so after toggling it adds the class back