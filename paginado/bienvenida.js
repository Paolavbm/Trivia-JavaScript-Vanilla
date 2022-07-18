const container = document.querySelector("#bienvenida");
container.classList.add("basic");

const bienvenidaContainer = document.createElement("div");
bienvenidaContainer.classList.add("bienvenida-container");

const bienvenidaContainer1 = document.createElement("div");
bienvenidaContainer1.classList.add("bienvenida-container1");


const titulo = document.createElement("h2");
titulo.classList.add("titulo");
titulo.textContent= "Disfruta de una entretenida trivia"

const jugar = document.createElement("a");
jugar.id = "jugar";
jugar.href= "../questions.html"
jugar.innerText = "Empezar"
jugar.classList.add("boton");
const scores = document.createElement("a");
scores.id = "scores";
scores.classList.add("boton");
scores.href = "../results.html"
scores.innerText = "Puntuaciones"

 container.append(bienvenidaContainer);
 bienvenidaContainer.append(bienvenidaContainer1)
 bienvenidaContainer1.append(titulo, jugar, scores)
