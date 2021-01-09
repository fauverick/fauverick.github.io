let body = document.querySelector("body");
let mine_table = document.querySelector(".mine_table");

//Render ô vuông

for(let i = 1; i<=120; i++)
{
    mine_table.innerHTML += `
        <button class = "mine">
            <span></span>
        </button>
   `
}

let mine_value = [];
let mine_number = [];
let mine_cover = [];

for(let i = 0; i<120; i++){
    mine_value[i] = false;
    mine_cover[i] = false;
}

let limx, limn;
limn = 1;

//Random vị trí của 20 bom

for(let i = 20; i>=1; i--){
    limx = Math.floor(119 - 5.5*i);
    let j = Math.floor(limn + Math.random()*(limx-limn));
    mine_value[j] = true;
    limn = j+2;
}

function valid(x, y){
    if(x>=0 && y>=0 && x<15 && y<8)
        return true;
    return false;
}

function convert(x, y){
    let k = 15*y + x;
    return k;
}

function checkmine(x, y){
    if (valid(x, y)){
        if(mine_value[convert(x, y)] == true)
        return true;
    }
    return false;
}

//Tính số lượng bom xung quanh các ô không có bom

for(let i = 0; i<120; i++){
    mine_number[i] = 0;
    if(mine_value[i] == false){
        let y = Math.floor(i/15);
        let x = i%15;
        if (checkmine(x+1, y)) mine_number[i]++;
        if (checkmine(x-1, y)) mine_number[i]++;
        if (checkmine(x, y+1)) mine_number[i]++;
        if (checkmine(x, y-1)) mine_number[i]++;
    }
}

let mine_list = document.querySelectorAll(".mine");

for(let i = 0; i<Array.from(mine_list).length; i++){
    mine_list.id = i;
    if(mine_value[i] == false){
        mine_list[i].querySelector("span").innerHTML = mine_number[i];
        mine_list[i].querySelector("span").style.visibility = "hidden";
    }
    if(mine_value[i] == true){
        mine_list[i].querySelector("span").innerHTML = "💣";
        mine_list[i].querySelector("span").style.visibility = "hidden";
    }
}

// Ấn vào ô không có bom thì hiện số
function uncover(i){
    mine_list[i].querySelector("span").style.visibility = "visible";
    if((mine_number[i] == 0) && (mine_value[i] == false) && ( mine_list[i].querySelector("span").innerHTML != "🏳️")) {
        mine_list[i].querySelector("span").style.visibility = "hidden";
        mine_list[i].style.borderColor = "#d9d9d9";
        // mine_list[i].style.backgroundColor = "#d2d2d2";
    }
}

function flag(i){
    mine_list[i].querySelector("span").innerHTML = "🏳️";
    mine_list[i].querySelector("span").style.visibility = "visible";
    let point = Number(document.querySelector(".point").querySelector("span").innerHTML);
    point--;
    document.querySelector(".point").querySelector("span").innerHTML = point;
}

// Ấn vào ô có bom thì kết game
function endgame(){
    let emoji = document.querySelector(".emoji");
    emoji.innerHTML = "💀";
    for(let i = 0; i<120; i++){
        if(mine_value[i] == true) uncover(i);
    }
}

function check_surround(x, y){
    if(valid(x, y)){
        let k = convert(x, y);
        if(mine_number[k] == 0 && mine_value[k] == false)
        return true;
    }
    return false;
}

function find_surround(x, y){
    let k = convert(x, y);
    uncover(k);
    mine_cover[k] = true;
    if(mine_number[k] == 0 && mine_value[k] == false){
        if(valid(x+1, y) && mine_cover[convert(x+1, y)] == false){
            find_surround(x+1, y);
        }
        if(valid(x-1, y) && mine_cover[convert(x-1, y)] == false){
            find_surround(x-1, y);
        }
        if(valid(x, y+1) && mine_cover[convert(x, y+1)] == false){
            find_surround(x, y+1);
        }
        if(valid(x, y-1) && mine_cover[convert(x, y-1)] == false){
            find_surround(x, y-1);
        }
    }
    if(mine_value[k] == true){
        endgame();
    }
}

let cnt = 0;
let cntcheck = 0;

addEventListener('keydown', function(event) {
    if(event.keyCode == 17) {
       cnt++;
    }
    if(event.keyCode == 13){
        for(let i = 0; i<120; i++)
            uncover(i);
    }
})


mine_list.forEach(function(btn, i){
    btn.addEventListener('dblclick', function(){
        flag(i);
    })

    btn.addEventListener('click', function() {
        console.log(cntcheck, cnt);
        if(cntcheck < cnt){
            flag(i);
            cntcheck = cnt;
        }
        else{
            let x = i%15;
            let y = Math.floor(i/15);
            find_surround(x, y);
        }
    }) 
})