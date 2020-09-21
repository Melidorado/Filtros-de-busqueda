const cards = document.querySelectorAll(".card")
const botones = document.querySelectorAll(".boton-color")

const sexos = document.querySelectorAll("input[name='sexo']")
console.log(sexos)

const busqueda = document.getElementById("filtro-escrito")

console.log(busqueda)



for (let boton of botones) {
    boton.onclick = () => {
        for (let card of cards) {
            
            if (boton.dataset.color === card.dataset.color) {
                card.classList.remove("hidden")
            }
            else if (boton.dataset.color === "todos") {
                card.classList.remove("hidden")
            }
            else {
                card.classList.add("hidden")
            }
        }
    }
}


for (let sexo of sexos) {
    sexo.oninput = () => {
        
        for (let card of cards) {
            if (sexo.value === card.dataset.sexo) {
                card.classList.remove("hidden")
            }
            else {
                card.classList.add("hidden")
            }
        }
        
        
    }
}


busqueda.oninput = () => {
    for (let card of cards) {
        const valorCard = card.dataset.nombre
        const valorBusqueda = busqueda.value
        if ( valorCard.includes(valorBusqueda.toLowerCase())) {
            card.classList.remove("hidden")
        }
        else {
            card.classList.add("hidden")
        }
    }
}
