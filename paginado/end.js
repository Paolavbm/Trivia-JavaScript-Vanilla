
const mostRecentScore = localStorage.getItem('mostRecentScore');
const container = document.querySelector("#end");
container.classList.add("container", "basic")
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];



const endContainer = document.createElement("div");
endContainer.classList.add("end-container");


const finalScore = document.createElement("h2");
finalScore.classList.add("finalScore");
finalScore.innerText = "Conseguiste un total de " + mostRecentScore + " puntos";

const form = document.createElement("form");
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const objeto = capturaDatos();
    const { id } = objeto
    console.log(objeto)
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('../index.html');

})


const username = document.createElement("input");
username.id = "username"
username.type= "text"
username.name= "username"
username.placeholder= "Ingrese Username"
console.log(username.value)

const save = document.createElement("button");
save.id = "saveScoreBtn"
save.type = "submit"
save.className = "btn"
save.textContent= "Guardar"

const playAgain = document.createElement("a");
playAgain.id = "playAgain";
playAgain.href= "../index.html"
playAgain.innerText = "Jugar de nuevo"
playAgain.className = "btn1"

const goHome = document.createElement("a");
goHome.id = "goHome";
goHome.href= "./bienvenida.html"
goHome.innerText = "Puntuaciones más altas"
goHome.className = "btn1"
 container.append(endContainer);
 form.append(username, save)
 endContainer.append(finalScore, form, playAgain, goHome)
 
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


 