import {url} from "./apiEdamam.mjs"



    async function getIngredientsData(ingredientes) {
    let response = await fetch(url+encodeURIComponent(ingredientes.join(", ")));
    let data = await response.json();
    return data
}



export default getIngredientsData







