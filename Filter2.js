const employees=[
    {empId:49400,empName:"Sudharshan",profileName:"Senior Developer"},
    {empId:59400,empName:"Shankar",profileName:"Senior Developer"},
    {empId:69400,empName:"Bharath",profileName:"Junior Developer"},
    {empId:89400,empName:"Mohan",profileName:"Senior Developer"},
    {empId:99400,empName:"Madhu",profileName:"Junior Developer"},
    {empId:29400,empName:"Naresh",profileName:"Senior Developer"},
    {empId:19400,empName:"Narendra",profileName:"Senior Developer"}
]
//let empFilterWithProfile=employees.filter(emp=>emp.profileName==="Senior Developer");
//console.log(typeof empFilterWithProfile);
//console.log(empFilterWithProfile);
let empFiltered=employees.filter(emp=>emp.empName.startsWith("M"));
console.log(typeof empFiltered);
console.log(empFiltered.length);

