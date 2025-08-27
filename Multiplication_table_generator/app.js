let btn = document.querySelector("#btn-sub")
let lastEle = document.querySelector("h3")
btn.addEventListener("click", function () {
    let NumVal = document.querySelector("#inputVal");

    let selectedVal = Number(NumVal.value);
    lastEle.innerHTML = "the table is given below ";    

  



    for (let i = 1; i <= 10; i++) {
        let newRow = document.createElement("div");
        let span_electedVal = document.createElement("span");
        span_electedVal.textContent = selectedVal;
        newRow.appendChild(span_electedVal);
        let span_sign = document.createElement("span");
        span_sign.textContent = "*";
        newRow.appendChild(span_sign);
        let span_iter = document.createElement("span");
        span_iter.textContent = i;
        newRow.appendChild(span_iter);
        let span_equlsign = document.createElement("span");
        span_equlsign.textContent = " = ";
        newRow.appendChild(span_equlsign);
        let span_result = document.createElement("span");
        span_result.innerText = selectedVal * i;
        newRow.appendChild(span_result);
        lastEle.append(newRow); 
    }
})

