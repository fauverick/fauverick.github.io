//Q1

let p = document.getElementById('paragraphs');
let splitWords = p.innerHTML.split(' ');

console.log(splitWords.length);

for(let i = 0; i<Array.from(splitWords).length; i++) {
    console.log(splitWords[i]);
    if(splitWords[i].length>=8) {
        splitWords[i] = `<span style = "background-color: yellow">${splitWords[i]}</span>` ;
    }
}
let res = splitWords.join(' ');
p.innerHTML = res;


//Q2
let link = document.querySelector('a');
link.href = "https://www.facebook.com/";

//Q3
document.write("Word Counts: " + splitWords.length + "\n");

//Q4
p.innerHTML = p.innerHTML.replace(/!/g, "😲");
p.innerHTML = p.innerHTML.replace(/?/g, "🤔");




