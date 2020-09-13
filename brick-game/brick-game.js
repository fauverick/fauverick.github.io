const canvas = document.getElementById('canvas');
const gameover = document.getElementById('gameover');
ctx = canvas.getContext('2d');

canvas.width = innerWidth * 0.75-2;
canvas.height = innerHeight * 0.75-2;
// canvas.style.border = '2px solid black';
canvas.style.background = '#faf3dd';

var h = canvas.height, w = canvas.width;
var s = 2;
var dx = -s, dy = -s, dx1 = 0, dy1 = 0, dbr = 15;
var gamelvl = 2;
var checkmove = false;

class Ball {
    constructor(x, y, r, score){
        this.x = x;
        this.y = y;
        this.r = r;
        this.score = score;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fillStyle = '#ffbb91';
        ctx.fill();
        ctx.closePath();
    }

    move(){
        if(checkmove){
            this.x += dx;
            this.y += dy;
        }
        this.draw();
    }

    drawScore(){
        ctx.beginPath();
        ctx.font = "45px Cambria";
        ctx.fillStyle = '#065c6f';
        ctx.fillText(this.score, 20, h-20);
        ctx.closePath();
    }
}

class Brick {
    constructor(x, y, w, h, color, lvl){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.lvl = lvl;
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
    }

    move(){
        this.draw();
    }
}

let ball = new Ball(w/2, h*0.85, 20, 0);
let stick = new Brick(w/2 - 50, h*0.85 + 25, 100, 25, '#64958f');
let list = [];

function generateBrick(){
    let brw = (w-4)/15;
    let brh = 30;
    let c = '#065c6f';
    for(let i = 1; i<=3; i++)
        for(let j = 1; j<=15; j++){
            let x = (j-1)*brw;
            let y = (i-1)*brh;
            let br = new Brick(x + 4, y + 4, brw-4, brh-4, c, 0);
            list.push(br);
        }
}

generateBrick();

function drawBrick(){
    for(let i = 0; i<list.length; i++)
        list[i].draw();
}

function checkOverlap (rc, xc, yc, x1, y1, w, h) 
{ 
    let x2 = x1 + w;
    let y2 = y1 + h;
    let xn = Math.max(x1, Math.min(xc, x2));
    let yn = Math.max(y1, Math.min(yc, y2));
	let dx = xn - xc; 
	let dy = yn - yc; 
    if ((dx * dx + dy * dy) <= rc * rc)
        return true;
    return false; 
} 

function checkIntersect(){
    let cnt = list.length - 1;
    while(cnt > 0){
        if(checkOverlap(ball.r, ball.x, ball.y, list[cnt].x, list[cnt].y, list[cnt].w, list[cnt].h)){
            dx *= 1;
            dy *= -1;
            list[cnt].lvl++;
            if(list[cnt].lvl == gamelvl){
                list.splice(cnt, 1);
                ball.score++;
            }
            else {
                list[cnt].color = '#e89f71';
            }
            break;
        }
        cnt--;
    }
    if(checkOverlap(ball.r, ball.x, ball.y, stick.x, stick.y, stick.w, stick.h)){
        dx *= 1;
        dy *= -1;
    }
}

function check(){
    if(ball.x <= ball.r)
    {
        dx *= -1;
        dy *= 1;
    }
    if(ball.y <= ball.r)
    {
        dx *= 1;
        dy *= -1;
    }
    if(ball.x >= w - ball.r){
        dx *= -1;
        dy *= 1;
    }
    if(ball.y >= h - ball.r){
        alert('Game Over');
        dx *= 1;
        dy *= -1;
        canvas.style.display = 'none';
        gameover.style.display = 'block';
    }
}

addEventListener('keydown', function(event){
   if(event.keyCode == '37' && stick.x >= 0){
        stick.x -=dbr;
   }
   else if(event.keyCode == '39' && stick.x <= w-stick.w)
        stick.x += dbr;
})

addEventListener('keydown', function(event){
    if(event.keyCode == '32'){
        if(checkmove == false){
            checkmove = true;
        }
        else {
            if(dx1 == 0 && dy1 == 0){
                dx1 = dx;
                dy1 = dy;
                dx = 0;
                dy = 0;
            }
            else {
                dx = dx1;
                dy = dy1;
                dx1 = 0;
                dy1 = 0;
            }
        }
    }
})

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, w, h);
    check();
    ball.move();
    ball.drawScore();
    stick.move();
    drawBrick();
    checkIntersect();
}

animate();