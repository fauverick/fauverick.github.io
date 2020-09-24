let number = document.querySelectorAll(".square");
let n = [];

function generate(){
    for(let i = 0; i<Array.from(number).length-1; i++){
        n[i] = Math.floor(Math.random()*20)
        number[i].querySelector("p").innerHTML = n[i];
    }
}

generate();

let input = document.querySelector("input");
let check = document.querySelector("button");

check.onclick = function(){
    fl = n[0] + n[1];
    let al;
    if(input.value == fl)
        al = confirm("Right Answer");
    else
        al = confirm("Wrong Answer");
    if(al) {
        input.value = "";
        generate();
        console.log("ok");
    }
}