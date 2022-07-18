const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const container = document.querySelector("#results");


const resultsContainer = document.createElement("div");
resultsContainer.classList.add("results-container", "basic");
resultsContainer.id = "highScore"

const titulo = document.createElement("h1");
titulo.highScore;
titulo.textContent = "Puntuaciones"

const lista = document.createElement("ul");
lista.id = "highScoresList"

  
const regresar = document.createElement("a");
regresar.id = "back"
regresar.href = "/"
regresar.textContent = "Regresar"
regresar.classList.add("btn1");

container.append(resultsContainer);
resultsContainer.append(titulo, lista, regresar)

highScores.map(user => {

    lista.innerHTML += `<li class="high-score">${user.nombre} - ${user.score}</li>`
})