//var canvas = document.getElementById('canvas')
var canvas = document.querySelector('#canvas')

canvas.width = 1000;
canvas.height = 600;
//canvas.style.border = '2px solid red';

console.log(canvas);

var ctx = canvas.getContext('2d');

class Rect{
    constructor(c, x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }
    draw()
    {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
    }
}

var r1 = new Rect('#ee161f', 0, 0, 500, 50);
var r2 = new Rect ('#ffffff', 0, 50, 500, 50);
var r3 = new Rect ('#1f174e', 0, 100, 500, 75);
var r4 = new Rect ('#ffffff', 0, 175, 500, 50);
var r5 = new Rect ('#ee161f', 0, 225, 500, 50);

r1.draw();
r2.draw();
r3.draw();
r4.draw();
r5.draw();



