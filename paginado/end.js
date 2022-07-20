/***
 * Nos traemos el puntaje mas reciente del jugador
 */
const mostRecentScore = localStorage.getItem('mostRecentScore');
// nos traemos el div del html y agregamos clases 
 
const container = document.querySelector("#end");
container.classList.add("container", "basic")

// Traemos los puntajes mas altos del local

 /***
 * Highscores trae los scores que se guardaron en el local
 */
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Creamos div y le agregamos clase

const endContainer = document.createElement("div");
endContainer.classList.add("end-container");

// Creamos elemento h2, agregamos clase y text
/***
 * Muestra el score final del juego
 */

const finalScore = document.createElement("h2");
finalScore.classList.add("finalScore");
finalScore.innerText = "Conseguiste un total de " + mostRecentScore + " puntos";

// Se crea formulario

const form = document.createElement("form");

// Se escucha el evento submit en el formulario para que al el enviarse se guarde esa info en el local en highScores y nos redirija al html principal
 
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const objeto = capturaDatos();
    const { id } = objeto
    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('../index.html');

})

// Creamos username con id, tipo, nombre y placeholder para el formulario 
 
const username = document.createElement("input");
username.id = "username"
username.type= "text"
username.name= "username"
username.placeholder= "Ingrese Username"



//Creamos boton con id, tipo, clase y conenido para el submit del formulario

const save = document.createElement("button");
save.id = "saveScoreBtn"
save.type = "submit"
save.className = "btn"
save.textContent= "Guardar"

// Creamos etiqueta a que nos redirija al html de la trivia
 
const playAgain = document.createElement("a");
playAgain.id = "playAgain";
playAgain.href= "../questions.html"
playAgain.innerText = "Jugar de nuevo"
playAgain.className = "btn1"

// Creamos etiqueta a que nos redirija al html principal
 
const goHome = document.createElement("a");
goHome.id = "goHome";
goHome.href= "../index.html"
goHome.innerText = "Puntuaciones más altas"
goHome.className = "btn1"

// insertamos elementos hijos a contenedores
 
 container.append(endContainer);
 form.append(username, save)
 endContainer.append(finalScore, form, playAgain, goHome)
 

/***
 * Funcion para capturar datos, ingresarlos a objeto y ordenarlos de mayor a menor tomando los 5 mayores
 */
 const capturaDatos = () => {
    
    const score = {
       score : mostRecentScore,
       nombre: username.value
    }
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores))
    return score;
    
}


 