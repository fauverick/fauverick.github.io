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
        // if(main_content.style.display != "none")
        //     main_content.style.display = "none";
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
        console.log(main_content.style.display);
        // if(main_content.style.display != "block")
        //     main_content.style.display = "block";
        btn_navigation.querySelector("i").innerText = "menu";
        btn_navigation.querySelector("i").style.fontSize = "20px";
        search_icon.querySelector("i").style.color = "#000000";
    }
}