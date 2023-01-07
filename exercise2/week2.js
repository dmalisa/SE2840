/*let x = 3.463;
console.log(x);
console.log(typeof x);
x="abc";
console.log(x);
console.log(typeof x);

console.log(1/0);
console.log(-1/0);

console.log(1/"abc");
console.log(typeof (1/"abc"));

console.log(3.062+45);
console.log("100" +234)
console.log(1234+"abc")*/

/*
let x = prompt('Enter an integer');
console.log(typeof x);
x= parseInt(x);
console.log(typeof x);

if(typeof (x) ==="number"){
    console.log('x is a number');
}
*/

let x = 123
let y = "345"

if (x = y) {
    console.log("for x: " + typeof (x) + x);
    console.log("for y: " + typeof (y) + y);
}

console.log("for x outside if: " + typeof (x) + x)
console.log("for y outside if: " + typeof (x) + x)

//always include const when defining functions using the fat arrow
// i.e the right way to itemize a function
const myfunction = () => {

}