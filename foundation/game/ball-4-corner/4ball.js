var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

canvas.width = innerWidth - 20;
canvas.height = innerHeight - 20;

w = canvas.width;
h = canvas.height;
var s = 5;
var fl = true;

class Ball{
    constructor(color, dx, dy, x, y, r)
    {
        this.color = color;
        this.dx = dx;
        this.dy = dy;
        this.x = x;
        this.y = y;
        this.r = r;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    move()
    {
        if(fl == false)
        {
            if ((this.x > w - this.r - s) && (this.y <= h - this.r -s))
            {
                this.dx = 0;
                this.dy = s;
                this.color = 'blue';
            }

            if ((this.x > w - this.r - s) && (this.y > h - this.r -s))
            {
                this.dx = -s;
                this.dy = 0;
                this.color = 'black';

            }
            
            if ((this.x < this.r + s) && (this.y > this.r + s))
            {
                this.dx = 0;
                this.dy = -s;
                this.color = 'yellow';
            }

            if ((this.x < this.r + s) && (this.y <= this.r + s))
            {
                this.dx = s;
                this.dy = 0;
                this.color = 'red';
            }

            this.x += this.dx;
            this.y += this.dy;
    }
    this.draw();
    }
}

var ball = new Ball('red', s, 0, 30, 30, 20);
ball.draw();

var keyCount =0;
var dx1, dy1;

addEventListener('keydown', function (event) {
    if (event.keyCode == 32) {
        keyCount++;
        if(keyCount % 2 == 1)
            fl = false;
        else
            fl = true;
        console.log("Space " + " " + ball.dx + " "+ ball.dy);
    }
  });

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, w, h);
    ball.move();
}

animate();