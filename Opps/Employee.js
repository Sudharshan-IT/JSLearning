class Employee{
    constructor(empId,empName,empAge,empSalary){
        this.empId=empId,
        this.empName=empName,
        this.empAge=empAge,
        this.empSalary=empSalary
    }
    getEmpDetails(){
        return{
          Id:this.empId,
          Name:this.empName,
          Age:this.empAge
        }
    }
}
let emp1=new Employee(101,'Sudharshan',29,50000);
let emp2=new Employee(102,"Pavani",24,70000);
let emp3=new Employee(103,'Sharada',30,40000);
let empList=[emp1,emp2];
console.log(empList);
let filteredRes=empList.filter(emp=>emp.empAge<30);
console.log("Filtered Res Based On Age :",filteredRes);

function Student(stdId,stdName,stdAge){
    this.stdId=stdId,
    this.stdName=stdName,
    this.stdAge=stdAge
}
let student1=new Student(303,"Sharanya",16);
let student2=new Student(304,"Chandu",14);
let student3=new Student(305,"Pradeep",17);
let studentList=[student1,student2,student3];
console.log(studentList);
console.log(emp1.getEmpDetails());
