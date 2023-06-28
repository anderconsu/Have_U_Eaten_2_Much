import Ingredient from "./Ingredient.mjs";
import ingList from "./ingList.mjs";
import getIngredientsData from "./getData.mjs";
import Resultados from "./results.mjs";
class functionalList {
    constructor() {
        this.ingList = new ingList();
    }
    addF() {
        let form = document.querySelector("form");
        form.addEventListener("submit", (ev) => {
            ev.preventDefault();
            const ingredientInput = document.querySelector('#ingredientes').value;
            if (!ingredientInput) {
                alert("Ingrediente vacío");
                return;
            }
            const cantidadSelect = document.querySelector('#cantidad').value;
            const unidadInput = document.querySelector('#unidad').value;
            let ing = new Ingredient(ingredientInput, cantidadSelect, unidadInput);
            form.reset();
            this.ingList.addIng(ing);
            this.ingList.render();

        })
        let botonResultado = document.querySelector("#resultadoBoton");
        botonResultado.addEventListener("click", async() =>{
            // botonResultado.remove()
            let resultado = document.querySelector("#results");
            resultado.innerHTML = ""
            console.log(this.ingList.array)
            console.log("Cargando resultados")
            botonResultado.hidden=true
            document.querySelector("#loading").hidden=false
            let result = await getIngredientsData(this.ingList.array);
            let res = new Resultados(result);
            document.querySelector("#loading").hidden=true
            res.render(res);

        })
        
    }    
}
export default functionalList