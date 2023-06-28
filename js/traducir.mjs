async function traducir(str) {
    const res = await fetch("http://0.0.0.0:5000/translate", {
        method: "POST",
        body: JSON.stringify({
            q: str,
            source: "es",
            target: "en",
            format: "text",
            api_key: "",
        }),
        headers: { "Content-Type": "application/json" },
    }).catch((error) => {
        console.error("Error:", error);
    });
    let datos = await res.json();
    console.log(`texto traducido a "${datos.translatedText}"`);
    return datos.translatedText;
}

export default traducir;

// // testeo
let result = await traducir("leche");
console.log(result);
