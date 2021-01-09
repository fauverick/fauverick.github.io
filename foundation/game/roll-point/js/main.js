//Sounds
var failed = document.getElementById("failed-music");
var success = document.getElementById("success-music");
var victory = document.getElementById("victory-music");

let score0 = document.getElementById("score-0");
score0.innerText = 0;
let score1 = document.getElementById("score-1");
score1.innerText = 0;

let btn_roll = document.querySelector(".btn-roll");
let dice1 = document.getElementById("dice-1");
let dice2 = document.getElementById("dice-2");

let current0 = document.getElementById("current-0");
current0.innerText = 0;
let current1 = document.getElementById("current-1");
current1.innerText = 0;

let player = [];
player[0] = document.querySelector(".player-0-panel");
player[1] = document.querySelector(".player-1-panel");
let current = 0;
player[current].classList.add("active");

let win = false;

let finalscore = document.querySelector(".final-score");
let maxscore;

let role1 = document.querySelector(".role1");
role1.style.display = "none";

finalscore.onkeyup = function(){
    maxscore = Number(finalscore.value);
}

dice1.style.display = "none";
dice2.style.display = "none";

function switchplayer(){
    player[current].classList.remove("active");
    current = (current + 1) % 2;
    player[current].classList.add("active");
    setTimeout(function(){ 
        dice1.style.display = "none";
        dice2.style.display = "none";
        role1.style.display = "none";
    }, 2000);
}

btn_roll.onclick = function(){
    dice1.style.display = "block";
    dice2.style.display = "block";
    if(finalscore.value == "")
        alert("Hãy Nhập Mức Điểm")
    else if(win){
        alert("Đã có người thắng!");
    }
    else {
        let score = Number(player[current].querySelector(".player-current-score").innerHTML);
        let num1 = Math.floor(Math.random() * 5) + 1;
        score += num1;
        dice1.src = "./img/dice-" + `${num1}` + ".png";
        let num2 = Math.floor(Math.random() * 6) + 1;
        score += num2;
        dice2.src = "./img/dice-" + `${num2}` + ".png";
        if(num1 == 1 || num2 == 1){
            player[current].querySelector(".player-current-score").innerHTML = 0;
            role1.querySelector(".role1_no").innerHTML = current + 1;
            role1.style.display = "block";
            switchplayer();
        }
        else{
            dice1.style.display = "block";
            dice2.style.display = "block";
            player[current].querySelector(".player-current-score").innerHTML = score;
        }
    }
}

btn_hold = document.querySelector(".btn-hold");
btn_hold.onclick = function(){
    if(finalscore.value == "" || win)
        alert("Hãy Nhập Mức Điểm");
    else if(win){
        alert("Đã có người thắng!");
    }
    else {
        console.log(maxscore);
        let playerscore = Number(player[current].querySelector(".player-score").innerHTML);
        let currentscore = Number(player[current].querySelector(".player-current-score").innerHTML);
        playerscore += currentscore;
        player[current].querySelector(".player-score").innerHTML = playerscore;
        player[current].querySelector(".player-current-score").innerHTML = 0;
        if(playerscore >= maxscore){
            player[current].querySelector(".player-name").innerHTML = "WINNER!";
            player[current].style.backgroundColor = "yellow";
            win = true;
        }
        else
        switchplayer();
    }
}

let newgame = document.querySelector(".btn-new");
newgame.onclick = function(){
    location.reload();
}

