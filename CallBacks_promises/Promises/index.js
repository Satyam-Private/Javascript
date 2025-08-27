console.log("this is satyam"); 


let p1 = new Promise(function(resolve , reject){ 
    let ranNum = Math.random(); 

    if(ranNum > 0.2){ 
        resolve("hey the number is " + ranNum);
    }
    else{ 
        reject("hey the number is less than or equal to 0.2"); 
    }
});

p1.then(function(a){ 
    console.log(a);
}).catch(function(a){ 
    console.log(a);
});

