class Product{
    constructor(prodId,prodName){
        this.prodId=prodId,
        this.prodName=prodName
    }
}
class Mobile extends Product{
    constructor(prodId,prodName,prodDes,prodPrice){
        super(prodId,prodName);
        this.prodDes=prodDes,
        this.prodPrice=prodPrice
    }
}
let product1=new Product(202,"Samsung");
console.log(product1);
let mobile1=new Mobile(101,"Apple","IPhone 14 Pro Max",40000);
let mobile2=new Mobile(102,"Samsung","Samsung 22 Latest Version",20000);
let mobileList=[mobile1,mobile2];
console.log(mobileList);