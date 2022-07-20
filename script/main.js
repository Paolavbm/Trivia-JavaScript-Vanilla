import { view } from "./viewCategories.js";
import {getData} from "./question.js"

/***
 * almacena la data
 */
export let preg = [];
/***
 * Ejecutamos funciones al cargar documento y alamcenamos lo traido en el fetch en variable  preg
 */
document.addEventListener("DOMContentLoaded", async() => {
preg = await getData();
view()

})
