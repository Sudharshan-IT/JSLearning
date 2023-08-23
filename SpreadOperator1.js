const bioInfo=['Nandyala','Sudharshan',"Yadav",'Software Developer','Hyderabad'];
console.log("Without Spread Operator :",bioInfo);
console.log("With Spread Operator :",...bioInfo);
const hero="JRNTR";
console.log(hero);
console.log("Sudharshan");

//Copy The Array Using Spread Operator
const empInfo=['101',"Sudharshan","SR Software Developer"];
const empAddressInfo=["Hyderbad","516162","Gachibowli"];
const empFullDetails=[...empInfo,"Hyderabad","606316","Gachibowli"];
console.log("Employee Full Details :",empFullDetails);
const empDetails=[
{
    empId:606316,
    empName:"Nandyala Sudharshan",
    empLocaiton:"Hyderabad"
},
{
    empId:606300,
    empName:"Mamilla Narendra Kumar",
    empLocaiton:"Bangalore"
}
]
console.log("Employee Details :",empDetails);

const details=['My',"Name","is","Sudharshan"];
console.log(details);
console.log(...details);
const details1=[...details, 'From Hyderabad'];
console.log(details1);

//Clone Array Using Spread Operator
//In Java Script Objects or Arrays Assinged by reference not by values
let numbers1=[1,2,3];
let numbers2=numbers1;
console.log(numbers1);
console.log(numbers2);
numbers1.push(4);
console.log(numbers1);
console.log(numbers2);

const employeeDetailsInfo=['Sudharshan',"Nandyala","Yadav"];
const copyOfEmployeeDetails=[...employeeDetailsInfo,"Bangalore","Marthalli"];
console.log(employeeDetailsInfo);
console.log(copyOfEmployeeDetails);
employeeDetailsInfo.push("Hyderabad");
console.log(employeeDetailsInfo);
console.log(copyOfEmployeeDetails);
//Comibine Two Objects
studentBisicDetails={
    studId:101,
    studName:'Sudharshan'
}
studentAddressDetails={
    locaiton:'Hyderbad',
    place:"Gachibowli"
}
const studentFullDetails={...studentBisicDetails,...studentAddressDetails};
console.log(studentFullDetails);

//Spread Operator Is Often Used In Comination Of Destructuring
const names=["Sudharshan","Narendra","HariNaik","Laskmi Reddy","Narayana"];
const[First,Second,Thrid,...RemainingNames]=names;
console.log(First);
console.log(Second);
console.log(Thrid);
console.log(RemainingNames);

//Define A Destructuring Object With Two Regular Variables and One Rest variable
const{Name,lastName,...otherInfo}={
    firstName:"Sudharshan",
    lastName:"Yadav",
    companyName:"Incedo",
    profession:"Software Develper",
    gender:"Male"
}
console.log(Name);
console.log(otherInfo);



