const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

canvas.width = 1000
canvas.height = 500;

let isDraw = false; 
let color = 'black' 
let size = 5; 
let oldsize = 0, eraser = 'false';
let lastEvent;

let btnColors = document.querySelectorAll(".color_btn");
let btnSizes = document.querySelectorAll(".size_btn");
let btnReset = document.querySelector('.btn_reset');
let btnEraser = document.querySelector('.btn_eraser');

const removeClass = (arr, className) => {
    arr.map(ele => ele.classList.remove(className))
}

btnColors.forEach(function(btn) {
    btn.addEventListener('click', function() {
        removeClass(Array.from(btnColors),'color_btn_active')
        this.classList.add('color_btn_active')
        let colorValue = this.getAttribute('color')
        color = colorValue
    })
})

btnSizes.forEach(function(btn) {
    btn.addEventListener('click', function() {
        removeClass(Array.from(btnSizes), 'size_btn_active')
        this.classList.add('size_btn_active');
        let sizeValue  = this.getAttribute('size');
        size = Number(sizeValue);
    })
})


btnReset.addEventListener('click', function() {
    c.clearRect(0,0, canvas.width, canvas.height)
})


btnEraser.addEventListener('click', function() {
    color = "white";
    oldsize = size;
    size = 100;
    eraser = "true";
})


canvas.onmousedown = (event) => {
    lastEvent = event;
    isDraw = true;
    x = event.offsetX;
    y = event.offsetY;
    c.strokeStyle = color;
    c.lineWidth = size;
}

canvas.onmousemove = (event) => {
    if (isDraw) {
        c.beginPath();
        c.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        c.lineTo(event.offsetX, event.offsetY);
        c.lineCap = 'round';
        c.stroke();
        lastEvent = event;
    }
}

canvas.onmouseup = () => {
    isDraw = false;
    if(eraser) {
        eraser = false;   
        size = oldsize;
    }
}