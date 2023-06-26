// import apikey from "./apiLocation.mjs"


// async function iplocation() {
//     let response = await fetch(`http://api.ipapi.com/api/check?access_key=${apikey}`);
//     let data = await response.json();
//     console.log(data)
// }
// iplocation();


import {url} from "./apiEdamam.mjs"

let ingredientes = ["100g chicken", " 200g beef"]





async function getIngredientsData(ingredientes) {
    let response = await fetch(url+encodeURIComponent(ingredientes.join(", ")));
    let data = await response.json();
    console.log(data)
}
getIngredientsData(ingredientes);

let datos =
{
    uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_ae6f6463f4ab4b40800b6fc7839996a6',
    calories: 130,
    totalCO2Emissions: 9948,
    co2EmissionsClass: 'G',
    totalWeight: 100,
    dietLabels: [ 'HIGH_PROTEIN', 'LOW_CARB', 'LOW_SODIUM' ],
    healthLabels: [
      'LOW_FAT_ABS',     'SUGAR_CONSCIOUS',
      'LOW_SUGAR',       'KIDNEY_FRIENDLY',
      'KETO_FRIENDLY',   'PALEO',
      'SPECIFIC_CARBS',  'DAIRY_FREE',
      'GLUTEN_FREE',     'WHEAT_FREE',
      'EGG_FREE',        'MILK_FREE',
      'PEANUT_FREE',     'TREE_NUT_FREE',
      'SOY_FREE',        'FISH_FREE',
      'SHELLFISH_FREE',  'PORK_FREE',
      'CRUSTACEAN_FREE', 'CELERY_FREE',
      'MUSTARD_FREE',    'SESAME_FREE',
      'LUPINE_FREE',     'MOLLUSK_FREE',
      'ALCOHOL_FREE',    'NO_OIL_ADDED',
      'NO_SUGAR_ADDED',  'SULPHITE_FREE',
      'FODMAP_FREE',     'KOSHER'
    ],
    cautions: [],
    totalNutrients: {
      ENERC_KCAL: { label: 'Energy', quantity: 130, unit: 'kcal' },
      FAT: { label: 'Total lipid (fat)', quantity: 4.81, unit: 'g' },
      FASAT: {
        label: 'Fatty acids, total saturated',
        quantity: 1.99,
        unit: 'g'
      },
      FATRN: { label: 'Fatty acids, total trans', quantity: 0.25, unit: 'g' },
      FAMS: {
        label: 'Fatty acids, total monounsaturated',
        quantity: 2.51,
        unit: 'g'
      },
      FAPU: {
        label: 'Fatty acids, total polyunsaturated',
        quantity: 0.31,
        unit: 'g'
      },
      CHOCDF: { label: 'Carbohydrate, by difference', quantity: 0.12, unit: 'g' },
      'CHOCDF.net': { label: 'Carbohydrates (net)', quantity: 0.12, unit: 'g' },
      FIBTG: { label: 'Fiber, total dietary', quantity: 0, unit: 'g' },
      SUGAR: { label: 'Sugars, total including NLEA', quantity: 0, unit: 'g' },
      PROCNT: { label: 'Protein', quantity: 21.6, unit: 'g' },
      CHOLE: { label: 'Cholesterol', quantity: 63, unit: 'mg' },
      NA: { label: 'Sodium, Na', quantity: 79, unit: 'mg' },
      CA: { label: 'Calcium, Ca', quantity: 13, unit: 'mg' },
      MG: { label: 'Magnesium, Mg', quantity: 21, unit: 'mg' },
      K: { label: 'Potassium, K', quantity: 373, unit: 'mg' },
      FE: { label: 'Iron, Fe', quantity: 2.09, unit: 'mg' },
      ZN: { label: 'Zinc, Zn', quantity: 5.41, unit: 'mg' },
      P: { label: 'Phosphorus, P', quantity: 217, unit: 'mg' },
      VITA_RAE: { label: 'Vitamin A, RAE', quantity: 2, unit: 'µg' },
      VITC: {
        label: 'Vitamin C, total ascorbic acid',
        quantity: 0,
        unit: 'mg'
      },
      THIA: { label: 'Thiamin', quantity: 0.08, unit: 'mg' },
      RIBF: { label: 'Riboflavin', quantity: 0.17, unit: 'mg' },
      NIA: { label: 'Niacin', quantity: 4.89, unit: 'mg' },
      VITB6A: { label: 'Vitamin B-6', quantity: 0.568, unit: 'mg' },
      FOLDFE: { label: 'Folate, DFE', quantity: 3, unit: 'µg' },
      FOLFD: { label: 'Folate, food', quantity: 3, unit: 'µg' },
      FOLAC: { label: 'Folic acid', quantity: 0, unit: 'µg' },
      VITB12: { label: 'Vitamin B-12', quantity: 2.27, unit: 'µg' },
      VITD: { label: 'Vitamin D (D2 + D3)', quantity: 0.1, unit: 'µg' },
      TOCPHA: {
        label: 'Vitamin E (alpha-tocopherol)',
        quantity: 0.18,
        unit: 'mg'
      },
      VITK1: { label: 'Vitamin K (phylloquinone)', quantity: 1.5, unit: 'µg' },
      WATER: { label: 'Water', quantity: 72.3, unit: 'g' }
    },
    totalDaily: {
      ENERC_KCAL: { label: 'Energy', quantity: 6.5, unit: '%' },
      FAT: { label: 'Fat', quantity: 7.3999999999999995, unit: '%' },
      FASAT: { label: 'Saturated', quantity: 9.95, unit: '%' },
      CHOCDF: { label: 'Carbs', quantity: 0.04, unit: '%' },
      FIBTG: { label: 'Fiber', quantity: 0, unit: '%' },
      PROCNT: { label: 'Protein', quantity: 43.2, unit: '%' },
      CHOLE: { label: 'Cholesterol', quantity: 21, unit: '%' },
      NA: { label: 'Sodium', quantity: 3.2916666666666665, unit: '%' },
      CA: { label: 'Calcium', quantity: 1.3, unit: '%' },
      MG: { label: 'Magnesium', quantity: 5, unit: '%' },
      K: { label: 'Potassium', quantity: 7.9361702127659575, unit: '%' },
      FE: { label: 'Iron', quantity: 11.61111111111111, unit: '%' },
      ZN: { label: 'Zinc', quantity: 49.18181818181818, unit: '%' },
      P: { label: 'Phosphorus', quantity: 31, unit: '%' },
      VITA_RAE: { label: 'Vitamin A', quantity: 0.2222222222222222, unit: '%' },
      VITC: { label: 'Vitamin C', quantity: 0, unit: '%' },
      THIA: { label: 'Thiamin (B1)', quantity: 6.666666666666667, unit: '%' },
      RIBF: {
        label: 'Riboflavin (B2)',
        quantity: 13.076923076923077,
        unit: '%'
      },
      NIA: { label: 'Niacin (B3)', quantity: 30.562499999999996, unit: '%' },
      VITB6A: { label: 'Vitamin B6', quantity: 43.692307692307686, unit: '%' },
      FOLDFE: { label: 'Folate equivalent (total)', quantity: 0.75, unit: '%' },
      VITB12: { label: 'Vitamin B12', quantity: 94.58333333333334, unit: '%' },
      VITD: { label: 'Vitamin D', quantity: 0.6666666666666666, unit: '%' },
      TOCPHA: { label: 'Vitamin E', quantity: 1.2, unit: '%' },
      VITK1: { label: 'Vitamin K', quantity: 1.25, unit: '%' }
    },
    ingredients: [ { text: '100g chicken,  200g beef', parsed: [Array] } ],
    totalNutrientsKCal: {
      ENERC_KCAL: { label: 'Energy', quantity: 129, unit: 'kcal' },
      PROCNT_KCAL: { label: 'Calories from protein', quantity: 86, unit: 'kcal' },
      FAT_KCAL: { label: 'Calories from fat', quantity: 43, unit: 'kcal' },
      CHOCDF_KCAL: { label: 'Calories from carbohydrates', quantity: 0, unit: 'kcal' }
    }
  }