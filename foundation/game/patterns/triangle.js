const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

canvas.width = innerWidth - 20;
canvas.height = innerHeight - 20;

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Triangle{
    constructor(p1, p2, p3){
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }

    draw(){
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.lineTo(this.p3.x, this.p3.y);
        ctx.lineTo(this.p1.x, this.p1.y);
        ctx.stroke();
        ctx.closePath();
    }

    drawMedian(){
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo((this.p2.x + this.p3.x)/2, (this.p2.y + this.p3.y)/2);
        ctx.stroke();
        ctx.moveTo(this.p2.x, this.p2.y);
        ctx.lineTo((this.p1.x + this.p3.x)/2, (this.p1.y + this.p3.y)/2);
        ctx.stroke();
        ctx.moveTo(this.p3.x, this.p3.y);
        ctx.lineTo((this.p2.x + this.p1.x)/2, (this.p2.y + this.p1.y)/2);
        ctx.stroke();
        ctx.closePath();
    }
}

let list = [];
list[0] = new Point(150, 200);
list[1] = new Point(300, 450);
list[2] = new Point(650, 300);

let tri = new Triangle(list[0], list[1], list[2]);

tri.draw();
tri.drawMedian();

