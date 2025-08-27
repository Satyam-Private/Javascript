function checkIfExist(str , sub ,  len){ 
    // if(str.indexOf(sub)){ 
    //     console.log("the substring is present at index " + str.indexOf(sub));
    // }
    // else{ 
    //     console.log("it is not present "); 
    // }


    let start = 0; 
    let end = 2;

    let ans = []; 
    while(end <= len){ 
        if(str.slice(start , end) == sub){ 
            ans.push(start);
        }

        start++; 
        end++;
    }
    console.log(ans); 
    
}



str = "Hey my name is satyam "; 
checkIfExist(str , "sa",  str.length);