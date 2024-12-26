var button = document.querySelector("button");
var card = document.querySelector(".box");
var img = document.querySelector(".box img")

button.addEventListener("click", function() {
    let a1 = Math.floor(Math.random()*255);
    let a2 = Math.floor(Math.random()*255);
    let a3 = Math.floor(Math.random()*255);
    let a4 = Math.floor(Math.random()*100);
    card.style.backgroundColor = `rgb(${a1}, ${a2}, ${a3})`;
    card.style.borderRadius = `${a4}%`;
    img.style.borderRadius = `${a4}%`;

});