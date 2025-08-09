let a  = document.querySelector("a");
console.dir(a);

a.href = "https://google.com";  // this is the one way of setting attribute 


// the another way is to use setAttribute 

a.setAttribute("href" , "https://facebook.com")


console.log(a.getAttribute("href"))

a.removeAttribute("href")

console.log(a.getAttribute("href"))



 





