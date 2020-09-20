// Q1

let li = [];
li[0] = "Username";
li[1] = "Password";
li[2] = "Confirm Password";

let input = document.querySelectorAll("input");
let label;

for(let i = 0; i<Array.from(input).length; i++){ //convert sang mảng bằng Array.from
    label = document.createElement("label");  // tạo thẻ label
    label.innerText = li[i]; //gán nội dung cho thẻ
    let node = input[i].parentNode; //lấy node Parent
    node.insertBefore(label, input[i]); //insert before
}

//Q2

let username = document.getElementById("username");
let password = document.getElementById("password");
let cfPassword = document.getElementById("confirmPassword");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

function show(input, btn){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        if(input.type == "password"){
            input.type = "text";
            btn.innerText = "Hide";
        }
        else {
            input.type = "password";
            btn.innerText = "Show";
        }
    })
}

show(password, btn1);
show(cfPassword, btn2);

//Q3, Q4, Q5


let submit = document.getElementById("btn");
let fl = false;

setblank();


function setsubmit(){
    submit.style.backgroundColor = "#3171E5";
    submit.style.cursor = "pointer";
    submit.type = "submit";
    fl = true;
}

function setblank(){
    submit.style.backgroundColor = "#D3D3D3";
    submit.style.cursor = "auto";
    submit.type = "button";
    fl = false;
}

username.onkeyup = function(){
    if(cfPassword.value == password.value && password.value != "") {
       setsubmit();
    }
}

cfPassword.onkeydown = function(){
    if(cfPassword.value != password.value){
        console.log('password false');
        label.innerText = "Confirm Password (Unmatched)";
        label.style.color = "red";
        setblank();
    }
}

cfPassword.onkeyup = function(){
    if(cfPassword.value == password.value && password.value != "") {
        console.log('password true');
        label.innerText = "Confirm Password (Matched)";
        label.style.color = "green";
        if(username.value != "") setsubmit();
    }
}

submit.onclick = function(){
    if(fl == true){
        alert("Form Submitted");
    }
    else {
        alert("All Blanks Must Be Filled Before Submitted")
    }
}
