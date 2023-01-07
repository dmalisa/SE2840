window.onload = ()=>{
validation1();
validation2();
validation3();
validation4();
    let button = document.getElementById("button");
    button.onclick = run;
}


const run = () => {
  let firstName = document.getElementById("first_name").value;
  first_name(firstName);
  let lastName = document.getElementById("last_name").value;
  last_name(lastName);
  radio_choice();
}

let invalid1 = document.getElementById("invalid1");
let invalid2 = document.getElementById("invalid2");
let invalid3 = document.getElementById("invalid3");
let invalid4 = document.getElementById("invalid4");

const first_name = (value) => {
    let valid = false;
    if (typeof value === 'string' || value instanceof String){
        valid = true;
    } else{
        invalid1 = document.getElementById("invalid1");
        invalid1.style.visibility ='visible';
    }
        return valid;
}

const last_name = (value) => {
    let valid = false;
    if (typeof value === 'string' || value instanceof String){
        valid = true;
    } else{
        invalid2 = document.getElementById("invalid2");
        invalid2.style.visibility ='visible';
    }
    return valid;
}

function radio_choice() {
    if(document.getElementById("radio1").checked){
        console.log("selected: HTML");
    } else if(document.getElementById("radio2").checked){
        console.log("selected: CSS");
    } else if (document.getElementById("radio3").checked){
        console.log("selected: Javascript");
    }
}

const validation1 = () => {
    invalid1 = document.getElementById("invalid1");
    if(invalid1.style.visibility === 'hidden'){
        invalid1.style.visibility = 'visible';
    } else {
        invalid1.style.visibility = 'hidden';
    }
}

const validation2 = () => {
    invalid2 = document.getElementById("invalid2");
    if(invalid2.style.visibility === 'hidden'){
        invalid2.style.visibility = 'visible';
    } else {
        invalid2.style.visibility = 'hidden';
    }
}

const validation3 = () => {
    invalid3 = document.getElementById("invalid3");
    if(invalid3.style.visibility === 'hidden'){
        invalid3.style.visibility = 'visible';
    } else {
        invalid3.style.visibility = 'hidden';
    }
}

const validation4 = () => {
    invalid4 = document.getElementById("invalid4");
    if(invalid4.style.visibility === 'hidden'){
        invalid4.style.visibility = 'visible';
    } else {
        invalid4.style.visibility = 'hidden';
    }
}