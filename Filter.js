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

console.log("***Finding Greater Than Four Value***");
function isGreaterThan4(x){
    return x>4;
}
const isGreaterThanFour1=arr.filter(isGreaterThan4);
console.log(isGreaterThanFour1);
const isGreaterThanFour2=arr.filter(function isGreaterThan4(n){
    return n>4;
});
console.log(isGreaterThanFour2);
const isGreaterThanFour3=arr.filter(n=>n>4);
console.log(isGreaterThanFour3);
/**Difference Betweeen Find() and Filter() Methods */
const arrayForFilter=[40,57,80,200,120];
const arrayForFilterRes=arrayForFilter.filter(n=>n%2===0);
console.log(arrayForFilterRes);

let employees=[
    {
    empName:"Sudharshan",
    empId:606312
    },
    {
     empName:"Pavani",
     empId:606345
    },
    {
        empName:"Narendra",
        empId:606900
    }

]
let empFilteredRes=employees.find(emp=>emp.empId===606345);
console.log(empFilteredRes);

const users=[
    {
        FirstName:"Nandyala",
        LastName:"Sudharshan",
        Age:28
    },
    {
        FirstName:"Nandyala",
        LastName:"Siva Sankar",
        Age:33
    },
    {
        FirstName:"Nandyala",
        LastName:"Shyam Prasad",
        Age:35
    },
    {
        FirstName:"Nandyala",
        LastName:"Sharanya",
        Age:15
    },
    {
        FirstName:"Nandyala",
        LastName:"Deekshith",
        Age:5
    },
    {
        FirstName:"Nandyala",
        LastName:"Chandra Sekhar",
        Age:40
    }
]
const listOfUsers=users.filter(
    (user)=>{
      return  user.Age > 30;
    }
).map(user=>user.FirstName+" "+user.LastName);
console.log(users);
console.log("Response :",listOfUsers);

