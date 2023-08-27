//Asynchrnous Programing
//You Order Tomato Soup
//Meanwhile you continue to your conversation with your friend
//Resolved - your server brings you soup
//Rejected - No Soup Today
/*
const orderSoup=()=>console.log('Soup Is Ready');
console.log('You Start The Conversation With Your Friend');
setTimeout(orderSoup,2000);//2 Sec
console.log("Still Speaking");
*/
let promises1=new Promise((resolve,reject)=>{
setTimeout(()=>{
    isReady=[true,false][Math.floor(Math.random()*2)]
    //isReady?console.log("Soup Is Ready"):console.log('Soup is not Ready')
    isReady ? resolve("Soup Is Ready"): reject("Soup Is Not Ready");
},2000)
});
console.log(
    promises1
    .then(success=>console.log(success))
    .catch(error=>console.log(error))
    .finally(console.log("Promise Has Completed Successfully!!"))
    );
console.log("fetch:",
fetch('https://dog.ceo/api/breeds/image/random')
.then(response=>response.json())
.then(data=>console.log(data))
)
