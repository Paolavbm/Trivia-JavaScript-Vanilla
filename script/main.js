import { view } from "./viewCategories.js";
import {getData} from "./question.js"


export let preg = [];

document.addEventListener("DOMContentLoaded", async() => {
preg = await getData();
view()

})
