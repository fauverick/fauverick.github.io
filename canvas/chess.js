var canvas = document.querySelector('#canvas')

canvas.width = 1000;
canvas.height = 1000;

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

    border()
    {
        ctx.beginPath();
        ctx.strokeStyle = this.c;
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
        ctx.closePath();
    }
}

var w = 50;

for(i = 1; i<=10; i++)
    for(j = 1; j<=10; j++)
    {
        var x = (j-1)*w;
        var y = (i-1)*w;
        var color = '#e6cbad';
        if(i > 1 && i <10 && j>1 && j<10)
        {
            var num = (i-2)*8+(j-2);
            if((num % 16) < 8){
                if((num % 2) == 1) color =  '#9b5424';
            }
            else{
                if((num % 2) == 0) color = '#9b5424';
            }
            var square = new Rect(color, x, y, w, w);
            square.draw();
        }
        else
        {
            var square = new Rect(color, x, y, w, w);
            square.draw();
            ctx.font = "25px Times New Roman";
            ctx.fillStyle = 'black';
            if(i > 1 && i < 10)
                ctx.fillText(10-i, x+17, y+35);
            if(j > 1 && j < 10)
                ctx.fillText(String.fromCharCode(65 + j-2), x+ 17, y+35 );
        }
    }
  
    var background = new Rect('black', 0, 0, 500, 500);
    background.border();

    var background = new Rect('black', 50, 50, 400, 400);
    background.border();



    

