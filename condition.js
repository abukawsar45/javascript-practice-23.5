// must condition
for (let i = 50; 0 < i; i--){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i)
    }
}

// obtional
let n = 60;
for (let i = 1; i <= n ; i++ ){
    if (i % 3 === 0 || i % 5 === 0){
        console.log(i)
    }
}