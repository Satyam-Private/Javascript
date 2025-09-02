function getData(dataId , getNextData){ 
    setTimeout( () => { 
        console.log("data " + dataId);
        if(getNextData){ 
            getNextData(); 
         }
    }, 3000)
}


getData(1 , () => { 
     getData(2 , () => { 
        getData(3 , () => { 
            getData(4);           // this is known as callback hell
        });
     });
}); 




function greeting(param , callbackFunc){ 
    console.log("Hello " + param); 
    if(callbackFunc){ 
        callbackFunc();
    }
}

greeting("satyam" , () => { 
    console.log("This is passed function "); 
})
