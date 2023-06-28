import Ingredient from "./Ingredient.mjs";
import ingList from "./ingList.mjs";

class functionalList {
    constructor() {
        this.ingList = new ingList();
    }
    addF() {
        let form = document.querySelector("form");
        form.addEventListener("submit", (ev) => {
            ev.preventDefault();
            const ingredientInput = document.querySelector('#ingredientes').value;
            const cantidadSelect = document.querySelector('#cantidad').value;
            const unidadInput = document.querySelector('#unidad').value;
            let ing = new Ingredient(ingredientInput, cantidadSelect, unidadInput);
            form.reset();
            this.ingList.addIng(ing);
            this.ingList.render();

        })
    }    
}
export default functionalList