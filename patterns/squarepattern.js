const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var input = document.getElementById('input-text');

canvas.width = innerWidth * 0.9;
canvas.height = innerHeight * 0.9;

let cnt;

function draw(){
    cnt = input.value;
    console.log(cnt);
    let l = Math.min(canvas.width, canvas.height) * 0.45;
    let x = 20, y = 20;
    for(let i = 1; i<=cnt; i++)
    {
        if(i%2 == 1)
        {
            ctx.beginPath();
            ctx.fillStyle = 'blue';
            ctx.fillRect(x, y, 2*l, 2*l);
            ctx.closePath();
            x += 0;
            y += l;
        }
        else {
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.moveTo(x, y);
            ctx.lineTo(x + l, y - l);
            ctx.lineTo(x + 2*l, y);
            ctx.lineTo(x+l, y+l);
            ctx.lineTo(x, y);
            ctx.fill();
            ctx.closePath();
            l /= 2;
            x += l;
            y -= l;
        }
    }
}

btn1.addEventListener('click', draw);

window.addEventListener('resize', function(){
    canvas.width = innerWidth * 0.9;
    canvas.height = innerHeight * 0.9;
    draw(canvas.width, canvas.height);
})


