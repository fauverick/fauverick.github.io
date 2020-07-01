var canvas = document.querySelector('#canvas')

canvas.width = 1000;
canvas.height = 1000;

console.log(canvas);

var ctx = canvas.getContext('2d');

class Circle{
    constructor(color, back, x, y, r, a){
        this.x = x;
        this.y = y;
        this.r = r;
        this.a = a;
        this.color = color;
        this.back = back;
    }
    draw()
    {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.back;
        ctx.arc(this.x, this.y, this.r, 0, this.a*Math.PI, false);
        ctx.stroke();
        ctx.fill();    
        ctx.closePath();
    }
}

var c1 = new Circle('white', 'black', 350, 350, 300, 2);
var c2 = new Circle('white', 'black', 275, 250, 25, 2);
var c3 = new Circle('white', 'black', 425, 250, 25, 2);
var c4 = new Circle('white', 'black', 350, 350, 250, 1);

c1.draw();
c2.draw();
c3.draw();
c4.draw();



