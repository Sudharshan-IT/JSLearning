function sum(...args){
    console.log("****Starting Of The Sum Method****")
    let total=0;
    for (const value of args) {
        total=total+value;
    }
     console.log("Rest Parameter Response :",total);
    return total;
   
}
const finalRes=sum(100,200,300,400,500);
console.log("Final Response :",finalRes);
console.log(sum(20,30,40,50));

const combine=(...args)=>{
    return args.reduce(function(prev,curr){
        return prev +' '+curr;
    });
};
let message=combine("Hello","Sudharshan "," How are you..");
console.log(" Resulst :",message);
//Rest parameter and Destructuring
const names=["Sudharshan","Nandyala","Yadav","Mamiall Narendra","Kumar Reddy"];
const[firstName,sureName,lastName,...fullName]=names;
console.log(sureName);
console.log(firstName);
console.log(lastName);
console.log(fullName);
//Rest Parameter with Filter Method
function filterNumbers(...numbers){
    const filteredNumbers=numbers.filter(
        n=>n>40
    );
    return filteredNumbers;
}
const filteredRes=filterNumbers(20,30,40,50,60,70,80);
console.log("Filtered Response On Given Numbers :",filteredRes);

function bioInfo(firstName,lastName,...otherInfo){
    return otherInfo;
}
const otherInfoRes=bioInfo("Sudharshan","Yadav","Java Developer","Hyderabad","JRNTR Fan");
console.log("Other Info :",otherInfoRes);
