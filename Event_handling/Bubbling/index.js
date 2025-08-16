let list = document.querySelector("ul");

list.addEventListener("click" , function(dets){ 
    console.log(dets.target);
    // alert("you clicked");     // here what is happening that we are clicking on li but technically li has no eventlisteners so is went to search on top element like ul so we added the event listner on ul so it worked 
    // dets.target.classList.add("lt");
    // we can add more functionality through toggle feature like 
    dets.target.classList.toggle("lt"); 
    // as we can see that when we click once on li then class is added, if we click one more time then this class we added previously now removed

})