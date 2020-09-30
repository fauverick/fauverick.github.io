let worklist = [];

let container = document.querySelector(".container");
let maxheight;
let workcontainer = document.querySelector(".todo-list");
let inputwork = document.getElementById("todo-input");
let addbtn = document.getElementById("btn-add");

let nowork = document.querySelector(".nowork-item");

function render(i){
    nowork.style.display = "none";
    let newitem = document.createElement("div");
    newitem.classList.add("todo-item");
    newitem.status = worklist[i].status;

    //create item
    let title = document.createElement("div");
    title.classList.add("todo-item-title");

    let input = document.createElement("input");
    input.type = "checkbox";
    title.appendChild(input);
    if(worklist[i].status == "finished")
        input.checked = "checked";

    let title_content = document.createElement("p");
    title_content.innerHTML = worklist[i].name;
    title.appendChild(title_content);

    title_content.style.textDecoration = "none";
    if(worklist[i].status == "finished")
        title_content.style.textDecoration = "line-through";
    

    newitem.appendChild(title);

    let option = document.createElement("div");
    option.classList.add("option");

    let update = document.createElement("button");
    update.classList.add("btn");
    update.classList.add("btn-update");
    let img_update = document.createElement("img");
    img_update.src="./img/pencil.svg";
    img_update.alt = "icon";
    update.appendChild(img_update);
    option.appendChild(update);

    let erase = document.createElement("button");
    erase.classList.add("btn");
    erase.classList.add("btn-remove");
    let img_erase = document.createElement("img");
    img_erase.src="./img/remove.svg";
    img_erase.alt = "icon";
    erase.appendChild(img_erase);
    option.appendChild(erase);
    newitem.appendChild(option);
    workcontainer.appendChild(newitem);

    update.onclick = function(){
        console.log("hello");
        inputwork.value = title_content.innerHTML;
        addbtn.innerText = "Rename";
        addbtn.onclick = function(){
            if(inputwork.value != ""){
                worklist[i].name = inputwork.value;
                title_content.innerHTML = worklist[i].name;
                inputwork.value = "";
                addbtn.innerText = "Add";
            }
            else alert("Công việc không được để trống");
            sessionStorage.setItem("worklist", JSON.stringify(worklist));
        }
    }   

    erase.onclick = function(){
        newitem.remove();
        worklist.splice(i, 1);
        sessionStorage.setItem("worklist", JSON.stringify(worklist));
        if(worklist.length == 0){
            alertnojob("all");
         }
    }

    input.onclick = function(){
        if(worklist[i].status == "unfinished"){
            worklist[i].status = "finished";
            title_content.style.textDecoration = "line-through";
        }
        else  if(worklist[i].status == "finished"){
            worklist[i].status = "unfinished";
            title_content.style.textDecoration = "none";
        }
        newitem.status = worklist[i].status;
        sessionStorage.setItem("worklist", JSON.stringify(worklist));
    }
    maxheight = container.style.height;
}

function retrievestorage(){
    worklist = JSON.parse(sessionStorage.getItem("worklist"));
    console.log(worklist);
    if (worklist == null) worklist = [];
    if(worklist.length == 0) {
        nowork.style.display = "flex";
        nowork.querySelector("p").innerText = "You have no job today";
    }
    else nowork.style.display = "none";
}

function renderall(){
    for(let i = 0; i < worklist.length; i++){            
        render(i);
    }
}

retrievestorage();
renderall();

let worklistsave;

addbtn.onclick = function(){
    if(inputwork.value != ""){
        let newjob = { 
            name : inputwork.value,
            status: "unfinished",   
            update: "false",
            show: "true"
        };
        worklist.push(newjob);
        render(worklist.length - 1);
        inputwork.value = "";
        sessionStorage.setItem("worklist", JSON.stringify(worklist));
    }
    else alert("Công việc không được để trống")
    let h = container.style.height;
    console.log("hello", h);
}

 let all_btn = document.getElementById("all");

 function alertnojob(str){
    nowork.style.display = "flex";
    if(str == "all") 
        nowork.querySelector("p").innerText = "You have no job today";
    if(str == "finished")         
        nowork.querySelector("p").innerText = "You have no finished job today";
    if(str == "unfinished")         
        nowork.querySelector("p").innerText = "You have no unfinished job today";
 }

 all_btn.onclick = function(){
    nowork.style.display = "none";
    let itemlist = workcontainer.querySelectorAll(".todo-item");
    for(let i = 0; i<Array.from(itemlist).length; i++){
        itemlist[i].style.display = "flex";
    }
    if(Array.from(itemlist).length == 0){
       alertnojob("all");
    }
 }

 let unactive_btn = document.getElementById("unactive");

 unactive_btn.onclick = function(){
    nowork.style.display = "none";
    let itemlist = workcontainer.querySelectorAll(".todo-item");
    let fl = false;
    for(let i = 0; i<Array.from(itemlist).length; i++){
        console.log("hello");
        console.log(itemlist[i].status);
        if(itemlist[i].status == "unfinished"){
            itemlist[i].style.display = "flex";
            fl = true;
        }
        else
        itemlist[i].style.display = "none";
    }
    if(!fl) {
        alertnojob("unfinished");
    }
 }

 let active_btn = document.getElementById("active");

 active_btn.onclick = function(){
    nowork.style.display = "none";
    let itemlist = workcontainer.querySelectorAll(".todo-item");
    let fl = false;
    for(let i = 0; i<Array.from(itemlist).length; i++){
        console.log("hello");
        console.log(itemlist[i].status);
        if(itemlist[i].status == "finished"){
            itemlist[i].style.display = "flex";
            fl = true;
        }
        else
        itemlist[i].style.display = "none";
    }
    if(!fl) {
        alertnojob("finished");
    }
 }