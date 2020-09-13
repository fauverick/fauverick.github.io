const canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

canvas.width = innerWidth - 20;
canvas.height = innerHeight - 20;

let list = ['#fdbf2e', '#4873c1', '#94d05e', '#c45818', '#ffffff', '#ffffff'];
let r = 250, x = 300, y = 300;

for (i = 0; i<=5; i += 2){
    ctx.beginPath();
    ctx.fillStyle = list[i];
    ctx.arc(x, y, r, 0, 2*Math.PI, false);
    ctx.fill();
    ctx.fillStyle = list[i+1];
    let l = r/Math.sqrt(2);
    ctx.fillRect(x-l, y-l, 2*l, 2*l);
    ctx.closePath();
    r = l;
}
