const para1 = document.createElement("p");
para1.classList.add("red");
para1.textContent = "Hey, I am red!";
para1.style.color = "red";
document.body.appendChild(para1);

const h3 = document.createElement("h3");
h3.classList.add("blue");
h3.textContent = "I am blue h3!";
h3.style.color = "blue";
document.body.appendChild(h3);

const div = document.createElement("div");
div.classList.add("container");
div.style.cssText = "border: 2px solid black; background: pink;";

const h1 = document.createElement("h1");
const para2 = document.createElement("p");
h1.textContent = "I am in a div!";
para2.textContent = "ME TOO!";
div.appendChild(h1);
div.appendChild(para2);
document.body.appendChild(div);
