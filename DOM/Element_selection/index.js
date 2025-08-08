// getelementbyid 
// getelementbyclass
// getelementbytag
// queryselector 
// queryselectorAll  
// these are used for selection 

let heading_id = document.getElementById('heading1'); 
console.log(heading_id);


let div_class = document.getElementsByClassName('first');
console.log(div_class);


let qselector = document.querySelector("h2"); 
console.dir(qselector);


let qselectorAll = document.querySelectorAll("h2");
console.dir(qselectorAll);