let show_icon = document.getElementById("show_details");
let sales_details = document.querySelector(".details");

let flag = 0;

show_icon.onclick = function(){
    if(flag == 0){
        sales_details.style.display = "block";
        flag = 1;
        show_icon.src = "../img/up-arrow.svg";
    }
    else{
        sales_details.style.display = "none";
        flag = 0;
        show_icon.src = "../img/down-arrow.svg";
    }
}