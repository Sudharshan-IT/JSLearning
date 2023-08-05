let numbers=[10,20,30,40,50];
const numWithMultiplyTwo=numbers.map(num=>num*2);
console.log(numWithMultiplyTwo);
function MyFunction(num){
return num/2;
}
let numberDividedByTwo=numbers.map(MyFunction);
console.log(numberDividedByTwo);
