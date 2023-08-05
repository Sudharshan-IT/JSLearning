const ages=[32,33,16,40];
const result=ages.filter(checkAdult);
function checkAdult(age){
    return age>=18;
}
console.log(result);
const ageFilter=ages.filter(age=>age>=18);
console.log(ageFilter);

/**Finding Odd Values In Number Array */
const arr=[1,2,3,4,5,6,7];
function isOdd(num){
return num%2;
}
const arrOdd1=arr.filter(isOdd);
console.log(arrOdd1);
console.log("*****************");
const arrOdd2=arr.filter(function isOdd(n){
    return n%2;
});
console.log(arrOdd2);
console.log("*****************");
const arrOdd3=arr.filter(n=>n%2);
console.log(arrOdd3);

function isEven(n){
    return n%2===0;
}
const arrEven1=arr.filter(isEven);
console.log(arrEven1);
console.log("********************");
const arrEven2=arr.filter(function isEvent(n){
return n%2===0;
});
console.log(arrEven2);
console.log("***********************");
const arrEven3=arr.filter(n=>n%2===0);
console.log(arrEven3);