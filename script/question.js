

const urlLevel1 = "https://js-vanilla-trivia.herokuapp.com/data" 

/***
 *Hacemos fetch de la url(link de la data que se creó en json acá perose subió a heroku)
 */

 /***
 * Función donde se realiza el fetch
 */
 export const getData = async () => {
    const peticion = await fetch(urlLevel1)
    const data = await peticion.json()
    return data
}

 



  




