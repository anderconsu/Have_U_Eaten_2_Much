import { translate } from '@vitalets/google-translate-api';


async function traducir(str) {
    const { text } = await translate(str, { 
        from: 'es',
        to: 'en' });
    return text;
}



export default traducir;


// testeo
// let result = await traducir("Hola");
// console.log(result);