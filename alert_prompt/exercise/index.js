let a  = prompt("enter the age"); 

const ageCheck  = (a) => { 
    if(a >= 18){ 
        return true;
    }
    else{ 
        return false;
    }
}

if(ageCheck(a)){ 
    alert("You can drive")
}
else{ 
    alert("you cant drive")
}