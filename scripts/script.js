// getElementById
let titleElement = document.getElementById("title");

console.log(titleElement);

// querySelector
let caption = document.querySelector("p");

console.log(caption);

let container = document.querySelector(".container");

console.log(container);

let divStuff = document.querySelector(".divStuff");

console.log(divStuff);


// querySelectorAll
let cool = document.querySelectorAll("h2");

console.log(cool);

// innerText
console.log(document.getElementById("inner-text"))

let text = document.getElementById("inner-text");
text.innerText = "This got changed yo"

console.log(document.getElementById("inner-text"));

// CSS Styling

document.getElementById("title").style.fontSize = "100px";

// Create Element and Append

const div = document.createElement("div");

document.body.append(div);