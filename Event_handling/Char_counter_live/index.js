let inp = document.querySelector("input"); 
let spn = document.querySelector("span");

inp.addEventListener("input", function(){ 
    let left = 20 - inp.value.length;
    // console.log("entered");
    // console.log(inp.value.length);
    spn.innerText = left;
    if(left >= 0){ 
        spn.style.color = "black";
    }
    if(left < 0){ 
        spn.style.color = "red";
    }


})