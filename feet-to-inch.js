// feet to inch
const perFeet = 12;
function feetToInch (inputFeet){
    let resultInch = inputFeet * perFeet;
    return resultInch
}
let inputFeet = 30;
const n = feetToInch (inputFeet);
console.log(n)