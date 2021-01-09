let person = [
    {
        name: "Lana Del Rey",
        img: "img/lana.jpg",
        content: "I was always an unusual girl. My mother told me I had a chameleon soul, no moral compass pointing due north, no fixed personality; just an inner indecisiveness that was as wide and as wavering as the ocean",
        color: "#331627",
    }, {
        name: "Matty Healy",
        img: "img/matty.jpg",
        content: "I think about dying but I dont want to die. Not even close. In fact my problem is the complete opposite. I want to live, I want to escape. I feel trapped and bored and claustrophobic. ",
        color: "#656a52",
    },
    {
        name: "Lorde",
        img: "img/lorde.jpg",
        content: "That slow burn wait while it gets dark, bruising the sun. I feel grown up with you in your car, I know it's dumb.",
        color: "#1b1d43",
    },
    {
        name: "The Weeknd",
        img: "img/theweeknd.jpg",
        content: "The music I make on this album is definitely matured. It’s a bit of a different state of mind even though it’s the same person. You never know what I’m going to say.",
        color: "#559994",
    }
]

let card = document.querySelector(".card");
card.style.backgroundColor = person[0].color;

let content = document.createElement("p");
content.innerHTML = person[0].content;
content.classList.add("content");
card.appendChild(content);

let name = document.createElement("p");
name.innerHTML = "-" + person[0].name + "-";
name.classList.add("name");
card.appendChild(name);

let ava_container = document.createElement("div");
ava_container.classList.add("ava_container");

for (let i = 0; i < person.length; i++) {
    let ava = document.createElement("ava");
    ava.classList.add("ava");
    let ava_img = document.createElement("img");
    ava_img.classList.add("ava_pic");
    ava_img.src = person[i].img;
    ava.appendChild(ava_img);
    ava.num = i;
    ava_container.appendChild(ava);
}

let avalist = ava_container.querySelectorAll(".ava");
console.log(avalist);

avalist.forEach(function (event) {
    event.addEventListener('click', function () {
        console.log(this);
        let i = this.num;
        card.style.backgroundColor = person[i].color;
        content.innerHTML = person[i].content;
        name.innerHTML = "-" + person[i].name + "-";
        for (let j = 0; j < Array.from(avalist).length; j++)
            avalist[j].id = "unactive";
        this.id = "active";
    })
})

card.appendChild(ava_container);
avalist[0].id = "active";


