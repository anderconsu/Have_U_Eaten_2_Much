import traducir from "./traducir.mjs";
class Resultados {
    constructor(data) {
        this.kcal = data.totalNutrients.ENERC_KCAL;
        this.dailykcal = data.totalDaily.ENERC_KCAL;
        this.fat = data.totalNutrients.FAT;
        this.dailyfat = data.totalDaily.FATRN;
        this.fatrn = data.totalNutrients.FATRN;
        this.dailyfatrn = data.totalDaily.FAT;
        this.procnt = data.totalNutrients.PROCNT;
        this.dailyprocnt = data.totalDaily.PROCNT;
        this.sugar = data.totalNutrients.SUGAR;
        this.dailysugar = data.totalDaily.SUGAR;
        this.carbo = data.totalNutrients.CHOCDF;
        this.dailycarbo = data.totalDaily.CHOCDF;
        this.fiber = data.totalNutrients.FIBTG;
        this.dailyfiber = data.totalDaily.FIBTG;
        this.mg = data.totalNutrients.MG;
        this.dailymg = data.totalDaily.MG;
        this.calcium = data.totalNutrients.CA;
        this.dailycalcium = data.totalDaily.CA;
        this.b12 = data.totalNutrients.VITB12;
        this.dailyb12 = data.totalDaily.VITB12;
        this.sodium = data.totalNutrients.NA;
        this.dailysodium = data.totalDaily.NA;
        this.vitamind = data.totalNutrients.VITD;
        this.dailyvitamind = data.totalDaily.VITD;
        this.vitc = data.totalNutrients.VITC;
        this.dailyvitc = data.totalDaily.VITC;
    }
    async render(obj) {
        let result = document.querySelector("#results");
        result.innerHTML = ""
        let ul = document.createElement("ul");
        for (let [key, value] of Object.entries(obj)) {
            if(value) {
                if(value.quantity > 0){
                let li = document.createElement("li");
                let label = await traducir(value.label, "en", "es");
                if (value.unit === "%") {
                    li.textContent = `Lo que equivale al ${Math.round(value.quantity*100)/100}${value.unit} del limite diario.`;
                    if (value.quantity>100) {
                        li.textContent += `Te has pasado un ${(Math.round((value.quantity-100)*100)/100)}${value.unit}`;
                        li.classList.add("danger");
                    }else{
                        li.classList.add("save");
                    }
                    li.classList.add("percentage");
                }else{
                    li.textContent = `Has consumido ${Math.round(value.quantity*100)/100}${value.unit} de ${label}`;
                    li.classList.add("consumed");
                }
                li.id = value.label;
                ul.appendChild(li);
                }
            }
        result.appendChild(ul);
        let botonres = document.querySelector("#resultadoBoton");
        botonres.textContent = "Volver a calcular";
        botonres.hidden = false;
    }
}
}

export default Resultados

// let ingredientes = ["100g chicken", " 200g beef"]
// let datos = await getIngredientsData(ingredientes);
// let resultado = new Resultados(datos);
// console.log(resultado)