var canvas = document.getElementById('canvas');
canvas.width = innerWidth - 10;
canvas.height = innerHeight - 10;
let w = canvas.width, h = canvas.height;
var s = 2;
var ctx = canvas.getContext('2d');

class Circle{
    constructor(color, r, x, y){
        this.color = color;
        this.r = r;
        this.x = x;
        this.y = y;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    move(){
        this.y -= s;
        if(this.y-this.r < 0) {
            this.y = h;
            this.color = "rgb(" + Math.random()*256 + ", " + Math.random() * 256 +  ", " + Math.random() * 256 + ")";
            this.r = Math.random()*25 + 25;
        }
        this.draw();
    }
}

var list = [];

function generateCircle(){
    for(let i = 0; i<10; i++) {
        let co = "rgb(" + Math.random()*256 + ", " + Math.random() * 256 +  ", " + Math.random() * 256 + ")";
        let ra = Math.random()*25 + 25;
        let posx = ra + Math.random()*(w-2*ra);
        let posy = ra + Math.random()*(h-2*ra);
        let c = new Circle(co, ra, posx, posy);
        list.push(c);
    }
}

function drawCircle(){
    for(let i = 0; i<list.length; i++){
        list[i].move();
    }
}

function check(xp, yp, i)
{
    let ra = list[i].r;
    let xc = list[i].x;
    let yc = list[i].y;
    if((Math.pow((xp-xc), 2) + Math.pow(yp-yc, 2)) < Math.pow(ra, 2))
        return true;
    return false;
}

generateCircle();

document.addEventListener('click', function() {
    let cnt = list.length-1;
    console.log(cnt);
    let x = event.clientX;
    let y = event.clientY;
    while (cnt>=0) {
        if(check(x, y, cnt)) {
            console.log(check(x, y, cnt));
            list.splice(cnt, 1);
            break;
        }
        cnt--;
    }
})

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, w, h);
    drawCircle();
}

animate();