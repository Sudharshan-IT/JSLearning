let p1= new Promise(
    (resolve,reject)=>{
        resolve(100);
    }
)
console.log(p1);
let p2=new Promise(
    (resolve,reject)=>{
      reject(200);
    }
)
p1.then((data)=>{
    console.log("Inside then ,Success");
    console.log(data);
});
p2.catch(data=>{
    console.log("Inside catch ,Un Success");
    console.log(data);
});
p1.finally(()=>{
    console.log("Inside finally, Promise has completed");
})

