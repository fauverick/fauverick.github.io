var canvas = document.querySelector('#canvas')

canvas.width = innerWidth * 0.90;
canvas.height = innerHeight * 0.90;
var ctx = canvas.getContext('2d');

canvas.style.border = "2px solid #000";

function draw(w, h)
{
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(w, h);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(w,0);
    ctx.lineTo(0, h);
    ctx.stroke();
    ctx.closePath();
}

draw(canvas.width, canvas.height);

window.addEventListener('resize', function() {
    canvas.width = innerWidth * 0.90;
    canvas.height = innerHeight * 0.90;
    draw(canvas.width, canvas.height);
})

