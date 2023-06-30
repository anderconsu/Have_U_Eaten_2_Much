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
            document.querySelector("#loading").hidden=true
            if (result == "error") {
                alert("No se han podido cotejar los datos");
                let result = document.querySelector("#results");
                result.innerHTML = ""
                let botonres = document.querySelector("#resultadoBoton");
                botonres.textContent = "Volver a calcular";
                botonres.hidden = false;
                return;}
            let res = new Resultados(result);
            res.render(res);
        })
        
    }    
}
export default functionalList