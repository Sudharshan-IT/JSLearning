const sortArray=[45,30,59,390];
const sortArrayRes=sortArray.sort(
    (a,b)=>{
        return a>b?-1:1;
    }
);
console.log("Descending Order :",sortArrayRes);
console.log("****************************");
const sortArrayRes1=sortArray.sort(
    (a,b)=>{
        return a>b?1:-1;
    }
);
console.log("Ascending Order :",sortArrayRes1);

const employess=[
    {
        empName:"Sudharshan",
        empId:606316,
        empSal:50000
    },
    {
        empName:"Narendra",
        empId:404805,
        empSal:25000
    },
    {
        empName:"Pavani",
        empId:39383,
        empSal:80000
    }
]
const empSortedByDecending=employess.sort(
    (emp1,emp2)=>{
     return emp1.empSal>emp2.empSal?-1:1;
    }
);
console.log("Sorted Employees In Descending Order By Salary :",empSortedByDecending);

const empSortedByAscending=employess.sort(
    (emp1,emp2)=>{
     return emp1.empSal>emp2.empSal?1:-1;
    }
);
console.log("Sorted Employees In Ascending Order By Salary :",empSortedByAscending);