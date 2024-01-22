let toggle = document.querySelector("#toggle");
let body = document.querySelector("body");
let para = document.querySelectorAll("p");
let h3 = document.querySelectorAll("h3");

toggle.addEventListener("click", function (){
    body.classList.toggle("changeColor");
    document.querySelector(".head h1").classList.toggle("changeWhite");
    para.forEach(function (value) {
        value.classList.toggle("changeWhite");
    });
    h3.forEach(function (value) {
        value.classList.toggle("changeWhite");
    });


})
