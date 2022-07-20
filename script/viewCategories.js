

import { preg } from "./main.js";


export const view = () => {
    /***
 * Variable donde se almacena respuest
 */
    let answer;
    /***
 *Variable donde se almacena puntaje
 */
    let score = 0;

    /***
  *Variable donde se almacena nivel
  */
    let pu = 0;


    /***
*Pregunta actual
*/
    let pregActual = preg[0][Math.floor((Math.random() * 5) + 0)]

    /***
  *Traemos contenedor desde el html
  */
    const container = document.querySelector("#divMain");

    /***
*Creamos contenedor y le agregamos clase
*/
    const triviaContainer = document.createElement("div");
    triviaContainer.classList.add("trivia-container");

    /***
  *Creamos el elemento header donde va a estar la pregunta y el score
  */
    const header = document.createElement("header");
    header.classList.add("header");

    /*** 
*H3 para titulo de la pregunta 
*/
    const question = document.createElement("h3");
    question.id = "titulo-preg";

    /*** 
*H3 para el score 
*/
    let puntuacion = document.createElement("h3");
    puntuacion.id = "score";

    //Como contenido de la primera pregunta dejamos la variable pregunta actual
    question.textContent = pregActual.question

    //Creamos elemento imagen para cuando le demos click nos envie al html principal
    const salir = document.createElement("img");
    salir.src = "https://res.cloudinary.com/paolavbm/image/upload/v1658121798/eliminar_1_j5w6ea.png"
    salir.addEventListener('click', (e) => {
        window.location.assign("../index.html");
    })

    //Insertamos elementos en contenedores
    header.append(question, puntuacion)

    const botones = document.createElement("div");
    botones.classList.add("botones");


    //Escuchamos los botones y al darle click en uno que contenga la clase boton entonces guarda el valor de dicho boton en la variable answer
    botones.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('boton')) {
            answer = e.target.value;
            console.log(answer)
        }
    })

    //creamos los botones y le damos los valores de la pregunta en la que se encuentra
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

    //Creamos contenedor
    const comprobar = document.createElement("div");
    comprobar.classList.add("comprobar");

    //Creamos boton para la comprobación
    const comprobarBoton = document.createElement("button");
    comprobarBoton.classList.add("botonFooter")
    comprobarBoton.textContent = "Comprobar"

    //Ingresamos elementos en los contenedores
    comprobar.append(comprobarBoton)
    botones.append(boton, boton1, boton2, boton3)
    triviaContainer.append(header, botones, comprobar);
    container.append(salir, triviaContainer);

    /*** 
  *Función para pasar pregunta
  */

    const nextQuestion = () => {

        //si el score es igual a 5 o pu que es el nivel es mayo a 5 entonces nos va a decir que ganaos y la cantidad de puntos obtenidos
        if (pu > 5 || score === 5) {
            alert("Felicidades, has ganado el juego con" + score + "" + puntos)

            //asignamos el score en el local con la llave mostRecentScore
            localStorage.setItem('mostRecentScore', score);

            //Nos envia al end donde se muestran los resultados de ese juego
            window.location.assign("../end.html");

        } else {
            //de lo contrario aumenta nivel
            pu++
            //guardamos score en el local
            localStorage.setItem('mostRecentScore', score);
            /***
             * Variable para posicion random dentro del array
             */
            let questionIndex = Math.floor((Math.random() * 5) + 0)
            //la pregActaul va a ser el nivel y una pregunta random dentro de ese nivel
            pregActual = preg[pu][questionIndex]

            //asignamos contenido pregunta y valores de los botones según la variable de pregunta actual
            question.textContent = pregActual.question;
            boton.value = pregActual.a
            boton1.value = pregActual.b
            boton2.value = pregActual.c
            boton3.value = pregActual.d
        }


    }

    //comprobamos si la respuesta es correcta escuchando el envento click en el botón comprobar
    comprobar.addEventListener('click', (e) => {
        //si la respuesta es igual a la respuesta de la pregunta actual entonces sumara al score, mostrara el score en pantalla y pasará a la siguiente pregunta
        if (answer === pregActual.correct) {
            score++;
            puntuacion.innerText = score

            nextQuestion()
        } else if (answer !== pregActual.correct) {
            //de lo contrario, si la respuesta es diferente me dirá que me equivoqué y me dirá la respuesta correcta
            alert("Has seleccionado la respuesta equivocada, la correcta era " + " " + pregActual.correct)
            //Después me enviará a los resultados 
            window.location.assign("../end.html");
        }



    })



}