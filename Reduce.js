const numbers=[1,2,3,4,5,6,7,8,9,10];
/**Find Sum Of The Given Array Elements */
const sum=numbers.reduce(
    function(acc,element){
        acc=acc+element;
        return acc;

    },0
);
console.log(sum);
function findSum(num){
    const sum=0;
    for(let n=0;n<=num[n];n++){
        sum=sum+num[n];
    }
    return sum;
}
function findSumOfNumbers(acc,ele){
    acc=acc+ele;
    return acc;
}
const sum1=numbers.reduce(findSum);
console.log("SUM :"+sum1);
const sum2=numbers.reduce(findSumOfNumbers);
console.log(sum2);
const sum3=numbers.reduce((acc,ele)=>{
    acc=acc+ele;
    return acc;
},0);
console.log("SUM 3: "+sum3);
let n=[35,45,55,65,75];
let nRes=n.reduce(
    (acc,ele,index,original)=>{
     console.log("Initial Value :",acc);
     return acc+ele;
    },100
);
console.log("Final Value :"+nRes);