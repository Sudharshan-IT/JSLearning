function displayContent(sub1,sub2,sub3){
    console.log("**Display Method Has Started**")
    console.log(sub1,"<=>",sub2,"<=>",sub3);
}
displayContent("ReactJS","NodeJS","MongoDB");
displayContent("Java","Spring","Hibernate");
displayContent("DevOps","AWS","Azure");

let ui_dev=(arg1,arg2,arg3)=>{
    console.log("***UI Defination Has Started***")
    return `${arg1} <==>${arg2} <==> ${arg3}`;
}
console.log(ui_dev("ReactJS","NodeJS","MongoDB"));
console.log(ui_dev("AngularJS","NodeJS","MySQL"));

let _outer=()=>{
    return ()=>{
        return "Hello, Welcome To ASHOK IT"
    };
};
console.log(_outer);