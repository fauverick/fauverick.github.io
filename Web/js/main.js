let btn_navigation = document.querySelector(".navigation");
let new_menu = document.querySelector(".new-menu");
let logo = document.querySelector(".menu-logo").querySelector("img");
let fixed_menu = document.querySelector(".menu-container");
let search_icon = document.getElementById("search-icon");
let main_content = document.querySelector(".main");
let body = document.querySelector("body");

btn_navigation.onclick = function(){
    let ins = fixed_menu.querySelector(".fa-instagram");
    let fb = fixed_menu.querySelector(".fa-facebook");
    if(new_menu.style.display == "none"){
        ins.style.color = "#ffffff";
        fb.style.color = "#ffffff";
        new_menu.style.display = "block";
        body.style.overflow = "hidden";
        btn_navigation.querySelector("i").innerText = "close";
        btn_navigation.querySelector("i").style.fontSize = "25px";
        search_icon.querySelector("i").style.color = "#ffcb15";
    }
    else {
        body.style.overflow = "auto";
        ins.style.color = "#000000";
        fb.style.color = "#000000";
        new_menu.style.display = "none";
        main_content.style.diplay = "block";
        btn_navigation.querySelector("i").innerText = "menu";
        btn_navigation.querySelector("i").style.fontSize = "20px";
        search_icon.querySelector("i").style.color = "#000000";
    }
}

let date = document.querySelector(".spotlight_date").querySelector("p");
var today = new Date();
date.innerText = today.getDate() + " tháng " + (today.getMonth()+1) + ' ' + today.getFullYear();

let link = [
    "images/xoi.png",
    "images/bunca.jpg",
    "images/bundau.jpg",
    "images/banhchuoi.jpg"
]
let eat_wrapper = document.querySelector(".eat").querySelector(".content_wrapper");
for(let i = 0; i<4; i++){
    eat_wrapper.innerHTML +=`
        <div class = "post_container">
            <div class = "post_pic">
                <a href = "#">
                    <img src = "${link[i]}">
                </a>
            </div>
            <div class = "post_content">
                <a href = "#">
                    <p class = "tag">FASTFOOD</p>
                    <p class = "title">Review: Bánh chuối An Giang Lương Thế Vinh</p>
                </a>
                <p class = "author">By Cao Hưng</p>
                <p class = "date">3 Thg 10 2020</p>
            </div>
        </div>
    `;
}