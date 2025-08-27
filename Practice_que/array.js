function countFreq(arr, len){ 
    let ans = []; 
     // time comp = O(n^2)
    // for(let i = 0; i < len; i++){ 
    //     for(let j = i + 1; j < len; j++){ 
    //         if(arr[i] == arr[j]){ 
    //             ans.push(arr[i]);

    //         }
    //     }
    // }

    // time comp = O(n) space comp = O(n)

    let obj = {}; 
    for(let i = 0; i < len; i++){ 
        if(obj[arr[i]]){ 
            obj[arr[i]] += 1;
        }else{ 
            obj[arr[i]] = 1;
        }
    }

    for(let key in obj){ 
        if(obj[key] > 1){ 
            ans.push(Number(key)); 
        }
    }

    
    return ans;
}


let arr = [1 , 2 , 3, 4, 5 ,2 ,5 , 4]; 
let ans = countFreq(arr , arr.length);
console.log(ans);