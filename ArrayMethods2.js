let sum=0;
let numbers=[20,30,40,50,60];
const res=numbers.forEach(
    (n)=>{
        sum+=n;
    }
);
console.log("Sum Of Given Array Elements :"+sum);
const resMultiply=numbers.forEach(
    (num,index,array)=>{
        console.log(num,index,array);
        numbers[index]=num*10;
    }
);
console.log("Multiply By 10 For Each Element In The Array :",numbers);
const fruits=['Banana','Apple',"Orange"];
fruits[fruits.length]='Kiwi';
console.log("Length Of Array :",fruits.length,"Array :",fruits);
const resConvertingArrayToString=fruits.toString();
console.log(resConvertingArrayToString);
let isArrayRes=Array.isArray(fruits);
console.log(isArrayRes);
let text="Sudharshan";
let resIsArray=Array.isArray(text);
console.log(resIsArray);
let restJoin=fruits.join("*");
console.log("Join Res :",restJoin);

let movieList=['RRR',"Bahubali","Devera"];
console.log("Original MovieList :",movieList);
movieList.pop();
console.log("Movie List After Pop :",movieList);
movieList.push("Devara");
console.log("Movie List After Push :",movieList);
movieList.shift();
console.log("Movie List After Shift :",movieList);
movieList.unshift("RRR");
console.log("Movie List After UnShift :",movieList);

let firstNames=["Nandyala","Adimulam","Kota","Mamilla"];
let lastNames=["Yadav","Reddy","Naik","Chowdary"];
let fullName=firstNames.concat(lastNames);
console.log("Full Names : ",fullName);

let ages=[3,34,56,67,77];
let isTrue=ages.every(
    (age)=>{
        return age>18;
    }
);
console.log("Every Methods Response :",isTrue);
