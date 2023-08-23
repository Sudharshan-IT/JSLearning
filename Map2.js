users=[
    {userName:"Sudharshan",userLocation:"Hyderabad",userId:606316},
    {userName:"Laskmi Reddy",userLocation:"Hyderabad",userId:505303},
    {userName:"Narendra",userLocation:"Bangalore",userId:303030},
    {userName:"Pavani",userLocation:"Bangalore",userId:101303},
    {userName:"Sharada",userLocation:"Bangalore",userId:704594},
    {userName:"Lakshmi",userLocation:"Bangalore",userId:80907}
]
//Using ForEach Method
let results=[];
users.forEach(user => {
    results.push(user.userName);
});
console.log(results);
//Using Map Method
let res=users.map(user=>user.userId);
console.log(res);
let filterUserNames=results.filter(user=>user.startsWith("S"));
console.log("Filter User Name Start With S Letter S:",filterUserNames);
let combineRes=[...results,...res];
console.log("Combined Response :",combineRes);
console.log(typeof combineRes);
//let filteredRes=combineRes.filter(s=>s.startsWith);
//console.log("Filtered Resp :",filteredRes);
combineRes.forEach(e=>{
    console.log(e);
})
let message=['Hello','Welcome'];
console.log(typeof message);
let filteredRes=message.filter(m=>m.startsWith('H'));
console.log("Filtered Res :",filteredRes);

