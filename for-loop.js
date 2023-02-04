let array = [234, 23, 563, 213, 65, 80, 87, 97, 6, 76, 'dsf', 'dfgd', 'esdf', 'sdf32', false]
for(let i = 0; i < array.length; i++){
    let n = array[i];
    console.log(n)
}

// output 80+
let array2 = [234, 23, 563, 213, 65, 80, 87, 97, 6, 76, 'dsf', 'dfgd', 'esdf', 'sdf32', false]
for(let i = 0; i < array2.length; i++){
    let n = array2[i];
    let m = 80;
    if (m < n){
        console.log(n)
    }
} 