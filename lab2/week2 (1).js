// jshint esversion: 6
//jshint devel:true
//jshint unused:false

let x=10;
console.log(x);
x="abc";
console.log(x);

const y='a';
console.log(y);
//y='c';

let mystr = "a person's preference said,\"someone\"";

//type conversion
console.log(String(74848));
console.log(parseFloat("3.123627"));
console.log(parseInt("abc"));
console.log(parseInt("123abc"));
console.log("abc" + "xyz");
console.log(15 + "xyz");
console.log("xyz" + 15);

//type coercion
let var1=1;
let var2="1";

console.log(var1=var2);
console.log(typeof (var1));
console.log(typeof (var2));
console.log(var1 == var2);
console.log(typeof (var1));
console.log(typeof (var2));
console.log(typeof (var1));
console.log(typeof (var2));
console.log(var1===var2);

var1=1;
var2="1";


if (var1===parseInt(var2)){
    console.log('equal');
}else{
    console.log('not equal');
}


if(var1!==var2){
    console.log(' not equal');
}

x=false;
x=undefined;
x=null;
x=NaN;
x=" ";
x=0;
x=-100;
x=40;

if(x!==undefined){
    console.log('Entered the conditional');
}

let classArray= [1,2,3,4.5,'Abc',['a','b','c'],undefined,null];
console.log(classArray);
console.log(classArray[5][0]);
classArray = new Array(5);
classArray[20]='xyz';
classArray[40]="abc";
console.log(classArray[30]);
console.log(classArray);

const anotherArray=[1,2,3];
//anotherArray = [1,2,3,4];
anotherArray[0]='abc';
console.log(anotherArray);

function disableButton(id){
    alert(id);
    document.getElementById(id).disabled = true;
}

function classFunction(param1,param2){
    //always returns undefined;
    return param1+param2;
}

console.log("coming from function: " ,classFunction(10,12));
const classFunction2 = (param1) =>{return param1*1000;};

console.log("coming from function: " ,classFunction2(30));
