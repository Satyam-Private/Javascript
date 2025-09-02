console.log("hellow")


let btn = document.querySelector("#btn-submit"); 
let random_num = parseInt(Math.random() * 100);
console.log(random_num);
let value = document.querySelector("#guessed-num");
let lastEle = document.querySelector("#border");
let res = document.createElement("h3"); 
res.textContent = "Current movers : 0";
lastEle.after(res);
let count = 1;
btn.addEventListener("click" , function(){ 
    
    let guessed_val = parseInt(value.value);
 
    if(guessed_val == random_num){ 
        res.textContent = "Hey you have done it !! Number of moves : " + count;
    }
    else if(guessed_val < random_num){ 
        res.textContent = "The entered value is less than the generated number enter again    Number of moves are : " + count;
    }
    else{ 
        res.textContent = "THe entered values is greater thatn the generated number enter again  Number of moves are : " + count;
    }
    count++;
})