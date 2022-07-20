
/***
 * Se trae lo almacenado de el localStore de puntajes mas altos
 */
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

/***
 * Contenedor que se encuentra en el html
 */
const container = document.querySelector("#results");

// Creamos div contenedor

const resultsContainer = document.createElement("div");
// Añadimos clase e id
 
resultsContainer.classList.add("results-container", "basic");
resultsContainer.id = "highScore"

// Creamos elemento h1 y le agregamos contenido al h1
/***
 * Mostrará titulo
 */
const titulo = document.createElement("h1");
titulo.highScore;
titulo.textContent = "Puntuaciones"

/***
 * lista donde se mostrará los scores
 */

// Creamos elemento ul 
const lista = document.createElement("ul");
lista.id = "highScoresList"

  
/***
 * Etiqueta a para ir de vuelta al html principal
 */
const regresar = document.createElement("a");
regresar.id = "back"
regresar.href = "/"
regresar.textContent = "Regresar"
regresar.classList.add("btn1");

// Insertamos hijos

container.append(resultsContainer);
resultsContainer.append(titulo, lista, regresar)

// Pintamos recorriendo con un map el contenido del local
 
highScores.map(user => {
    lista.innerHTML += `<li class="high-score">${user.nombre} - ${user.score}</li>`
})