import getIngredientsData from "./getData.mjs";
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
}

export default Resultados

// let ingredientes = ["100g chicken", " 200g beef"]
// let datos = await getIngredientsData(ingredientes);
// let resultado = new Resultados(datos);
// console.log(resultado)