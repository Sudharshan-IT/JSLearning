//Promises In Java Script
//Synchronous Vs Asynchronous
console.log("Start");
/*
setTimeout(()=>{
    console.log("Subscribe To Roadside Coder");
},1000);
*/

function importantAction(userName){
   return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    return resolve(`Subscribe The ${userName} Channel To Get More Content`);
   },500);
   })
}
/*
const message=importantAction("Road Side Coder",function(message){
    console.log(message);
});
*/
function likeTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Please Like The ${video} Video.`)
        },1000);
    });
}
function shareTheVideo(video){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Please Share The ${video} Video.`)
        },1000);
    });
}
/*
importantAction("Road Side Coder")
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})
likeTheVideo('Swing Zara Songs From JaiLavaKusa')
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})
*/
/*
importantAction("Road Side Coder")
.then((res)=>{
    console.log(res);
    return likeTheVideo("Java Script Interview Questions");
})
.then((res)=>{
    console.log(res);
    return shareTheVideo("Java Script Interview Questions");
})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.error(err);
})
console.log("Finish");
Promise.all([
    importantAction("Road Side Coder"),
    likeTheVideo("JavaScript Interview Questions"),
    shareTheVideo("JavaScript Interview Questions")
])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
*/
//By Using async and await keywords we can avoid using then and catch and finally
//Methods On Promise Object
const result=async()=>{
    try{
    const message1=await importantAction("Road Side Coder");
    const message2=await likeTheVideo("Javascript Interview Questions");
    const message3=await shareTheVideo("Javascript Interview Questions");
    console.log(
        {message1
        ,message2,
         message3
        }
    );
    }catch(error){
    console.log("Promise Failed",error);
    }
}
result();
console.log("Stop");