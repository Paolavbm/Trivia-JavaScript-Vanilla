// Traemos contenedor del html
 
const container = document.querySelector("#bienvenida");
container.classList.add("basic");

// Creamos div contenedor
 
const bienvenidaContainer = document.createElement("div");
bienvenidaContainer.classList.add("bienvenida-container");

// Creamos div contenedor 
 
const bienvenidaContainer1 = document.createElement("div");
bienvenidaContainer1.classList.add("bienvenida-container1");

//Creamos elemento h2 y y le ingresamos contenido 
const titulo = document.createElement("h2");
titulo.classList.add("titulo");
titulo.textContent= "Disfruta de una entretenida trivia"

//Creamos elemento a que nos envie a la preguntas
const jugar = document.createElement("a");
jugar.id = "jugar";
jugar.href= "../questions.html"
jugar.innerText = "Empezar"
jugar.classList.add("boton");

// Creamos elemento a que nos envie a los resultados donde se muestran los 5 mas altos
 
const scores = document.createElement("a");
scores.id = "scores";
scores.classList.add("boton");
scores.href = "../results.html"
scores.innerText = "Puntuaciones"


// Insertamos elementos dentro de contenedores
 
 container.append(bienvenidaContainer);
 bienvenidaContainer.append(bienvenidaContainer1)
 bienvenidaContainer1.append(titulo, jugar, scores)
