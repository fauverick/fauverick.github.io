let bar = document.getElementById("bar");
let navbar = document.getElementById("nav-bar");
let closebar = document.getElementById("close-bar");
let body = document.querySelector("body");
let linklist = document.getElementById("link-list");
console.log(body);
console.log(navbar);
console.log(bar);

let flag = false;

bar.onclick = function(){
    navbar.style.width = "250px";
    bar.style.display = "none";
    body.style.overflowY = "hidden";
    navbar.style.filter = "brightness(100%)"
    linklist.style.display = "block";
}

closebar.onclick = function(){
    navbar.style.width = "0px";
    body.style.overflowY = "inherit";
    linklist.style.display = "none";
    setTimeout(function(){ bar.style.display = "block";}, 200);
}