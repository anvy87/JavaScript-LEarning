// get and set attributes

const link = document.querySelector("a");
console.log(link);
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://codprog.com");
console.log(link.getAttribute("href"));

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement);
console.log(inputElement.getAttribute("type"));