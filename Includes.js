let names=["Chennai","Hyderabad","Bangalore","Keral","Karnataka","Vijayawada"];
let findingCity=()=>{
    /*
if(names.includes("Chennai")){
    return "Chennai Is Part Of Names Array";
}else{
    return 'Chennai Is not part of Names Array';
}
*/
let isTure=names.includes("Hyderabad")?" Yes":"NO";
console.log(isTure);
}
console.log(findingCity());

let age=45;
/*
age>30 ? age>70 ?
console.log("Your are Getting Old"):
console.log("you are between 30 & 69"):
console.log("You are below 10");
*/
let findResult=(Marks)=>{
let results=(Marks<40)?"UnSatisfied":
            (Marks<60)?"Average":
            (Marks<80)?"Good":"Excellent";
            return results;
}
console.log(findResult(50));

    
