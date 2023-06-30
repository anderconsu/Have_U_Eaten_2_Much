import { url } from "./apiEdamam.mjs";

async function getIngredientsData(Array) {
    let data = {"ingr": Array};
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    }).catch((error) => {
        console.error("Error:", error);
    });
    if (response.status != 200) {
        return "error"
    }
    let datos = await response.json();
    return datos;
}

export default getIngredientsData;


// let ingredientes = ["100g chicken", " 200g beef"]
// let datos = await getIngredientsData(ingredientes);
// console.log(datos)
