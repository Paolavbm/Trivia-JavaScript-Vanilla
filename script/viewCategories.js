

import { preg } from "./main.js";


export const view = () => {
    let answer;
    let score= 0;
    let pu = 0;
    let pregActual = preg[0][Math.floor((Math.random() * 5) + 0)]


    const container = document.querySelector("#divMain");

    const triviaContainer = document.createElement("div");
    triviaContainer.classList.add("trivia-container");


    const header = document.createElement("header");
    header.classList.add("header");
    const question = document.createElement("h3");
    question.id = "titulo-preg";
    let puntuacion = document.createElement("h3");
    puntuacion.id = "score";

    question.textContent = pregActual.question

    const salir = document.createElement("img");
    salir.src = "https://res.cloudinary.com/paolavbm/image/upload/v1658121798/eliminar_1_j5w6ea.png"
    salir.addEventListener('click', (e) => {
        window.location.assign("../end.html");
    })
    
    // const imagen = document.createElement("img");
    // imagen.src = "https://res.cloudinary.com/paolavbm/image/upload/v1654852215/adqxgkitfubxxf3ulsk0.jpg";
    // imagen.width = "100";
    // imagen.id = "img";
    header.append(question, puntuacion)

    const botones = document.createElement("div");
    botones.classList.add("botones");

    botones.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('boton')) {

            answer = e.target.value;
            console.log(answer)
        }
    })


    let boton = document.createElement("input");
    boton.type = "button"
    boton.value = pregActual.a
    boton.classList.add("boton");
    let boton1 = document.createElement("input");
    boton1.type = "button"
    boton1.value = pregActual.b
    boton1.classList.add("boton");
    let boton2 = document.createElement("input");
    boton2.type = "button"
    boton2.value = pregActual.c
    boton2.classList.add("boton");
    let boton3 = document.createElement("input");
    boton3.type = "button"
    boton3.value = pregActual.d
    boton3.classList.add("boton");


    const comprobar = document.createElement("div");
    comprobar.classList.add("comprobar");

    const comprobarBoton = document.createElement("button");
    comprobarBoton.classList.add("botonFooter")
    comprobarBoton.textContent = "Comprobar"

    comprobar.append(comprobarBoton)
    botones.append(boton, boton1, boton2, boton3)
    triviaContainer.append(header, botones, comprobar);
    container.append(salir,triviaContainer);


    const nextQuestion = () => {
        if(pu > 5 || score === 500){
            alert("Felicidades, has ganado el juego con" + score + "puntos" )
            localStorage.setItem('mostRecentScore', score);
            window.location.assign("../end.html");
           
        }else {
            pu++
            localStorage.setItem('mostRecentScore', score);
            let questionIndex = Math.floor((Math.random() * 5) + 0)
            pregActual = preg[pu][questionIndex]
            question.textContent = pregActual.question;
            boton.value = pregActual.a
            boton1.value = pregActual.b
            boton2.value = pregActual.c
            boton3.value = pregActual.d
        }
        
      
    }
  
    
        comprobar.addEventListener('click', (e) => {
            if (answer === pregActual.correct) {
              score = score + 100;
             puntuacion.innerText =  score
              console.log(score)
              nextQuestion()
            }else if(answer !== pregActual.correct){
            alert("Has seleccionado la respuesta equivocada, la correcta era " + " "+   pregActual.correct)
            window.location.assign("../end.html");
        }
          

      
        })
  

        
}