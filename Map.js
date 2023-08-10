const persons=[
    {"FirstName":"Nandyala",
     "LastName":"Sudharshan",
     "Age":28
    },
    {"FirstName":"Adimulam",
     "LastName":"Pavani",
     "Age":23
    },
    {"FirstName":"Nandyala",
     "LastName":"SivaSankar",
     "Age":32
    }
]
const result=persons.map(getFullname);
function getFullname(person){
let fullName=person.FirstName+" "+person.LastName;
return fullName
}
console.log(result);
const result2=persons.map((person)=>{
    return person.FirstName+"->"+person.LastName;
});
console.log(result2);
const result3=persons.map(person=>{ return person.FirstName+"*"+person.LastName});
console.log(result3);

/* Example 3 Finding The Double Of Existing Array Element */
const arr=[2,3,4,5,6];
function double(n){
return n*2;
}
const arrDouble1=arr.map(double);
console.log(arrDouble1);
const arrDouble2=arr.map(function double1(n){
return n*2;
});
console.log(arrDouble2);
const arrDouble3=arr.map(n=>n*2);
console.log(arrDouble3);

function tripple(n){
    return n*3;
}
const arrTripple1=arr.map(tripple);
console.log(arrTripple1);
const arrTripple2=arr.map(function tripple(n){
    return n*3;
});
console.log(arrTripple2);
const arrTripple3=arr.map(n=>n*3);
console.log(arrTripple3);

function Binarry(n){
    return n.toString(2);
}
const arrBinary1=arr.map(Binarry);
console.log(arrBinary1);
const arrBinary2=arr.map(function binary(n){
    return n.toString(2);
});
console.log(arrBinary2);
const arrBinary3=arr.map(n=>n.toString(2));
console.log(arrBinary3);
const numbers = [65, 44, 12, 4];
const newNumbers=[];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  newNumbers[index] = item * 10;
}
console.log(newNumbers);
const nums=[300,340,360,400];
const numsRes=nums.map(
    (ele,index,original)=>{
    console.log(ele,index,original);
    return ele+100;
    },0
);
console.log(numsRes);

const users=[
    {
        "FirstName":"Nandyala",
        "LastName":"Sudharshan",
        "Age":28
    },
    {
        "FirstName":"Adimulam",
        "LastName":"Pavani",
        "Age":24
    },
    {
        "FirstName":"Mamilla",
        "LastName":"Narendra",
        "Age":28
    }
]
const fullName=users.map(
    (user)=>{
        return user.FirstName+" "+user.LastName+" "+user.Age;
    }
);
console.log("Full Name With Age :",fullName);

