// DOM
// Document Object Model
// overview.. how to use.. deep study

// console.dir(document);

// select element using get element by id

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);

// select element using query selector

const mainHeading1 = document.querySelector("#main-heading");
console.log(mainHeading1);

const header = document.querySelector(".header");
console.log(header);

const navItem = document.querySelector(".nav-items");
console.log(navItem);

const navItem1 = document.querySelectorAll(".nav-items");
console.log(navItem1);