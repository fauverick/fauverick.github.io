let boxes = document.querySelector(".boxes");
let btn = document.getElementById("btn");
let cnt = document.querySelector(".points");
let boxlist = boxes.querySelectorAll(".box");

let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]

function render(){
    for(let i = 0; i<5; i++){
        let b = document.createElement("div");
        b.classList.add("box");
        b.style.backgroundColor = colors[i];
        boxes.appendChild(b);
    }
    boxlist = boxes.querySelectorAll(".box");
    boxlist.forEach(function(btn) {
        btn.addEventListener('click', function() {
            this.remove();
            boxlist = boxes.querySelectorAll(".box");
            cnt.innerText = " " + Array.from(boxlist).length;
        })
    })
    cnt.innerText = " " + Array.from(boxlist).length;
}

render();

btn.onclick = function(){
    render();
}


