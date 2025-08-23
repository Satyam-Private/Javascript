let a = () => { 
    console.log("hey this is the arrow function ");
}

a();

// now lets focus on parameters 

let b  = (Param1 , Param2) => {
    console.log(Param1 + Param2);   // here Param1 , Param2 are parameters
}

b(1 , 3); 


// here lets see e.g. of async programming 
// async programming can be achieved by setTimeout, setInterval 



console.log('one');
console.log('two');
let hello = () => { 
    console.log("hey this is inside the hellow arrow function");
}

setTimeout(hello , 5000);

console.log('three');   

// here the setTImeout will take time so it started countdown and let others to execute 

// so the execution is not in sequnce of instructions thats why it is async programming 


// lets take a look at callback 
// callback is when a function is used inside the function as arguments 

let count = 0;
let interval = setInterval( () => { 
    console.log("this runs continous "); 
    count = count + 1;
    if(count == 5){ 
        clearInterval(interval);
    }
}, 2000)



