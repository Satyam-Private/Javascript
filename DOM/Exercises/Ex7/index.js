let selection = document.querySelector("select");

console.dir(selection);
let selectionDiv = document.querySelector(".selection");



selection.addEventListener("change" , function(details){ 
    console.log(details)
    let newChild = document.createElement("p"); 
    newChild.textContent = " ";
    newChild.textContent = "Congratulations you selected " + details.target.value;

    selectionDiv.append(newChild);
    alert("Congratulations you selected " + details.target.value);

})