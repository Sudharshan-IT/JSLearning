const student={
    firstName:"Sudharshan",
    lastName:"Yadav",
    surName:"Nandyala",
    fullName:function(){
    //console.log(this);
     console.log(`${this.firstName} ${this.lastName}`);
    }
}
const employee={
    firstName:"Pavani",
    lastName:"Yadav"
}
student.fullName();
student.fullName.call(employee);

var employee1={
    empName:"Sudharshan",
    empId:606316,
    salary:50000,
    calSalaryWithBonus:function(bonus){
        this.salary=this.salary+bonus;
        console.log(`${this.empName} Salary After The Bonus ${this.salary}`);
    }
}
employee1.calSalaryWithBonus(5000);
var employee2={
    empName:"Pavani",
    empId:606315,
    salary:35000
}
employee1.calSalaryWithBonus.call(employee2,2000);