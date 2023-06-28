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
            let button = document.createElement("button");
            button.textContent = "Eliminar";
            button.addEventListener("click", () => {
                console.log("Eliminar seleccionado");
                this.lista.splice(this.lista.indexOf(ing), 1);
                li.remove();
            });
            li.appendChild(button);
            lista.appendChild(li);
        });
    }
}

export default ingList;
