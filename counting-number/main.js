let number = document.getElementById("counter");
let minus = document.querySelector(".prevBtn");
let plus = document.querySelector(".nextBtn");

console.log(number);
console.log(minus);
console.log(plus);

function setcolor(val){
    if(val > 0) number.style.color = "green";
    if(val < 0) number.style.color = "red";
    if(val == 0) number.style.color = "#333333";
}

minus.onclick = function (){
    let value = number.innerHTML;
    let newval = Number(value) - 1;
    number.innerHTML = newval;
    setcolor(newval);
}

plus.onclick = function (){
    let value = number.innerHTML;
    let newval = Number(value) + 1;
    number.innerHTML = newval;
    setcolor(newval);
}