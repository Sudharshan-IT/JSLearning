let display=()=>{
    console.log("Cliked.........")
}
let productList=[];
async function fetchData(){
let res= await fetch('https://fakestoreapi.com/products')
const finalRes=await res.json();
console.log(finalRes);
}
/*
.then(res=>res.json());
console.log("Response :",res);
res.then(data=>{
    productList=data;
});
console.log(productList.length);
*/
fetchData();

