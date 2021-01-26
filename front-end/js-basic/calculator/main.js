let btn_num = document.querySelectorAll(".num");
let cal_input = document.querySelector(".input").querySelector("p");
let cal_result = document.querySelector(".result").querySelector("p");
let btn_op = document.querySelectorAll(".op");
let btn_del = document.querySelector(".del");
let btn_clr = document.querySelector(".clr");
let btn_equal = document.querySelector(".equal");

btn_del.onclick = function(){
    cal_input.innerHTML = cal_input.innerHTML.slice(0, cal_input.innerHTML.length-1);
}

btn_clr.onclick = function(){
    cal_input.innerHTML = "";
}

function cal_time(s){
    let str = s.replace("×", "*");
    // let str = s;
    // for(let i = 0; i<str.length; i++){
    //     if(str[i] == "×")
    //         str = s.substr(0, i) + "*" + s.substr(i+1, s.length-1);
    // }
    return str;
}

function cal_divider(s){
    let str = s;
    for(let i = 0; i<str.length; i++){
        if(str[i] == "÷")
        str = s.substr(0, i) + "/" + s.substr(i+1, s.length-1);
    }
    return str;
}

function cal_sqrt(s){
    let str = s;
    for(let i = 0; i<str.length; i++){
        if(str[i] == "√"){
            if(str[i+1] == "(")
            str = s.substr(0, i) + " Math.sqrt" + s.substr(i+1, s.length-1);
            else{
                str = s.substr(0, i) + " Math.sqrt(" + s.substr(i+1, s.length-1) + ")";
            }
        }    
    }
    return str;
}

function calculate(s){
    let str = s;
    str = cal_time(str);
    str = cal_divider(str);
    str = cal_sqrt(str);
    console.log(str);
    let res = eval(str);
    console.log(res);
    return res;
}

btn_equal.onclick = function(){
    let res = calculate(cal_input.innerHTML);
    cal_result.innerHTML = res;
}

btn_num.forEach(function(btn) {
    btn.addEventListener('click', function() {
        let x = this.innerHTML;
        cal_input.innerHTML += x;
        cal_result.innerHTML = "";
    })
})

btn_op.forEach(function(btn) {
    btn.addEventListener('click', function() {
        let x = this.innerHTML;
        cal_input.innerHTML += x;
        cal_result.innerHTML = "";
    })
})