const startGame = document.getElementById('start')
const endGame = document.getElementById('end')
const canvas = document.getElementById("canvas");
const btn_start_game = document.getElementById('btn-start-game')

var ctx = canvas.getContext('2d');
canvas.style.display = 'none';
canvas.width = innerWidth - 1;
canvas.height = innerHeight - 4;
canvas.style.background = 'black';
var h = canvas.height, w = canvas.width;

var s = 3;
var ra = 10;
var checkmove = false;
var dx = s, dy = 0, dx1 = 0, dy1 = 0;

btn_start_game.addEventListener('click', function() {
    startGame.style.display = 'none'
    canvas.style.display = 'block';
})


class Ball {
    constructor(color, r, x, y, score, txt){
        this.color = color;
        this.r = r;
        this.x = x;
        this.y = y;
        this.score = score;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    move(dx, dy){
        if(checkmove){
            this.x += dx;
            this.y += dy;
            this.draw(); 
        }
    }

    drawScore(){
        ctx.beginPath();
        ctx.font = "45px Cambria";
        ctx.fillStyle = 'red';
        ctx.fillText(this.score, 50, h-10);
    }

    drawTutorial(){
        ctx.beginPath();
        ctx.font = "25px Cambria";
        ctx.fillStyle = 'white';
        ctx.fillText(this.txt, w/2 - 120, 50);
    }
}

ball = new Ball('red', 30, 35, 35, 0, '');
ball.txt = 'Press space to start playing';

class Circle {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, ra, 0, Math.PI * 2, false);
        ctx.fillStyle = 'yellow';
        ctx.fill();
        ctx.closePath();
    }
}

var list = [];

function generateCircle(){
    for(let i = 0; i<30; i++) {
        let posx = 10 + Math.random()*(w-20);
        let posy = 100 + Math.random()*(h-110);
        let c = new Circle(posx, posy);
        list.push(c);
    }
}

function drawCircle(){
    for(let i = 0; i<list.length; i++){
        list[i].draw();
    }
}

function checkTouch(x1, y1, r1, x2, y2, r2){
    let ds = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2); 
    let rs = (r1 + r2) * (r1 + r2); 
    if(ds >= rs) return false;
    return true;
}

function check() {
    if(ball.x <= ball.r){
        console.log('hello');
        dx = s;
        dy = 0;
    }
    
    if(ball.y <= ball.r){
        dx = 0;
        dy = s;
    }
    
    if(ball.x >= w - ball.r){
        dx = -s;
        dy = 0;
    }
    
    if(ball.y >= h - ball.r){
        dx = 0;
        dy = -s;
    }
    let cnt = list.length-1;
    while(cnt >= 0){
        if(checkTouch(list[cnt].x, list[cnt].y, ra, ball.x, ball.y, ball.r))
        {
            list.splice(cnt, 1);
            ball.score++;
            if(ball.score % 5 == 0) ball.r *= 1.15;
            new Audio('http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Mouse%20Click%20Fast.wav-23232-Free-Loops.com.mp3').play();
            if(ball.score == 30){
                canvas.style.display = 'none'
                endGame.style.display = 'block'
            }
            break;
        }
        cnt--;
    }
}


addEventListener('keydown', function(event){
    if(event.keyCode >= 37 && event.keyCode <= 40) 
        check();
    if(event.keyCode == 37){
            dx = -s;
            dy = 0;
    }
    if(event.keyCode == 38){
            dx = 0;
            dy = -s;
    }
    if(event.keyCode == 39){
            dx = s;
            dy = 0;
    }
    if(event.keyCode == 40){
        dx = 0;
        dy = s;
    }
    if(event.keyCode == 32){
        console.log(ball.txt);
        if(checkmove == false){
            checkmove = true;
            ball.txt = 'Press space to stop playing';
        }
        else {
            if(dx1 == 0 && dy1 == 0){
                dx1 = dx;
                dy1 = dy;
                dx = 0;
                dy = 0;
                ball.txt = 'Press space to resume playing';

            }
            else {
                dx = dx1;
                dy = dy1;
                dx1 = 0;
                dy1 = 0;
                ball.txt = 'Press space to stop playing';
            }
        }
    }
})

generateCircle();

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, w, h);
    ball.move(dx, dy);
    ball.draw();
    ball.drawScore();
    ball.drawTutorial();
    drawCircle();
    check();
}

animate();