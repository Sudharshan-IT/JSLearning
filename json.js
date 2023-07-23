let obj={
    "sub_one":"ReactJS",
    "sub_two":"NodeJS",
    "sub_three":"MongoDB"
}
console.log(obj.sub_one,obj.sub_two,obj.sub_three);
let movieList={
    "movieCombo":{
    "JRNTR":"Devara",
    "AlluArjun":"Pushpa2",
    "MaheshBabu":"Gunturukaram"
    }
}
console.log(movieList);
for(let key in movieList.movieCombo){
    console.log(movieList.movieCombo[key]);
}
let emp={
    "Emp1":()=>{
        return "Welcome To Incedo"
    },
    "Emp2":()=>{
        return "Welcome To Wipro"
    },
    "Emp3":()=>{
        return "Welcome To TCS"
    }
}
console.log(emp.Emp1(),
            emp.Emp2(),
            emp.Emp3()
    );
    let student={
        "studentNumber":100,
        "studentName":"Sudharshan",
        "locaiton":"Hyderbad",
        "group":"MPC"
    }
    //Destructuring
    const{studentNumber,studentName,locaiton,group}=student;
    console.log(studentName,locaiton,studentNumber,group);