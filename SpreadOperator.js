function test(...arg){
    console.log(arg);
}
test(120);
test("Sudharshan","Nandyala","Yadav");
test("300.0",null,"Nandyala");
test(undefined,null,undefined);

function movieList(...list){
console.log(list);
}
console.log("RRR","Devara","Temper");

const numbers1=[20,30,40,50];
const numbers2=[60,70,80,90];
const comboNumbers=[...numbers1,...numbers2];
console.log("Spread Operator :"+comboNumbers);
const updatedNumbers1=[...numbers1,100,120,140,160,180];
console.log("Updated Numbers1 :",updatedNumbers1);

let employee={
    empId:102,
    empName:"Sudharshan",
    location:"Hyderabad"
};
console.log("Employee Details :",employee);
employee.empName="Nandyala";
let updatedEmployee={...employee};
console.log("Updated Employee Details :",updatedEmployee);

const vehicle={
    brand:"Ford",
    model:"Mahendra",
    color:"Red"
}
const updatedVehicle={
    type:"Car",
    year:2023,
    color:'yellow'
}
const updatedVehicleDetails={
    ...vehicle,
    ...updatedVehicle
}
console.log(updatedVehicleDetails);





