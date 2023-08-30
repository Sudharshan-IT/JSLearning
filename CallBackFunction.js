//Defination
//A Function which Can be passed as an argument to another function 
//Is Called As CallBack Function
//CallBack Function
function bestColor(color){
    console.log("My Best Color is :",color);
}
function showBestColor(callBack,choice){
    callBack(choice);
}
showBestColor(bestColor,"Red");