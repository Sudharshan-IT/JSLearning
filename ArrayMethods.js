let names=['Sudharshan','Narendra','Ravi','Hari','Lashmi'];
console.log('Names List',names);
let arrayToString=names.toString();
console.log("Converting Array To String :"+arrayToString);
let movies=new Array('RRR','Bahubali','Devara','Simhadri','Rangasthalam');
console.log("Movies List :",movies);
let reverseArray=movies.reverse();
console.log("Reverse Array :",reverseArray);
console.log("Length Of Reverse Array :"+reverseArray.length);
//ForEach
console.log("Printing The Array With ForEach Method")
names.forEach(n=>console.log(n));
names.push('Pavani');
console.log("Added New Element To Names Array :",names);
let MoviesWithSort=movies.sort();
console.log("Ascending Order :",MoviesWithSort);
let moviesWithDescendingOrder=movies.sort((a,b)=>{
    return b-a;
});
console.log("Discending Order :",moviesWithDescendingOrder);
let filterMoviesStartWithR=movies.filter(movie=>movie.startsWith('R'));
console.log("Filtered Movie Name Start With R :",filterMoviesStartWithR);