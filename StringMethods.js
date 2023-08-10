let text="Sudharshan, Nandyala How ,Yadav,Kadapa";
let movie=new String("Aravinda ,Sametha");
console.log("Movie Name :",movie);
console.log("Name :",text);
//toUppperCase Method
console.log("toUpperCase :",text.toUpperCase());
console.log("toUpperCase :",movie.toUpperCase());
//toLowerCase Method
console.log("toLowerCase :",text.toLowerCase());
console.log("toLowerCase :",movie.toLowerCase());
//startsWith
console.log("Start With :",text.startsWith("S"));
//endsWith
console.log("EndsWith :",text.endsWith("a"));
//Split Method
console.log("Split :",movie.split(","));
console.log("Split Names :",text.split(","));

//SubString
console.log("Sub String :",text.substring(12,20));
//Replace 
console.log("Replace :",text.replace("Kadapa","Hyderabad"));

//CharAt
console.log("Char At :",text.charAt(12));

//IndexOf
console.log("Index Of :",text.indexOf("S"));
//Trim
let space='             Hello Nandyala Sudharshan  Yadav    ';
console.log("Trim :",space.trim());

//Replace All
//Concat
let text1="Hello";
let text2="Mr. Sudharshan";
let text3="Yadav";
let finalText=text1.concat(" ",text2,text3);
console.log("Concat  :",finalText);
let textBackTick=` Introduction ${text1} My Name Is ${text2} ${text3}`;
console.log(textBackTick);


