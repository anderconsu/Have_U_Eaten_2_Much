
class ingList {
    constructor() {
        this.lista = [];
    }
    addIng(ing) {
        this.lista.push(ing);
    }
    render() {
        let lista = document.querySelector("#list ul");
        lista.innerHTML = "";
        this.lista.forEach((ing) => {
            let li = document.createElement("li");
            li.textContent = `${ing.cantidad}${ing.unidad} de ${ing.ingrediente}`;
            lista.appendChild(li);
        });
    }
}

export default ingList