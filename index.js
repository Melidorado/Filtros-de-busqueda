const cards = document.querySelectorAll(".card")
const filtroColores = document.querySelectorAll("input[type='checkbox']")


const sexos = document.querySelectorAll("input[name='sexo']")


const busqueda = document.getElementById("filtro-escrito")




/* for (let color of filtroColores) {
    color.onclick = () => {
      filtrarPorColores()
    }
}

filtrarPorColores = () => {
    for (let card of cards) {
        card.classList.add("hidden")
        if (colorSeleccionado()) {
            if (mismosColores(card)){
                card.classList.remove("hidden")
            }
            if (todosColores()) {
                card.classList.remove("hidden")
            }

        }
        else {
            card.classList.remove("hidden")
        }
    }
}

colorSeleccionado = () => {
    for (let color of filtroColores) {
        if (color.checked) {
            return true
        }
    }
}

mismosColores = (card) => {
    for (let color of filtroColores) {
        if (color.value === card.dataset.color && color.checked) {
            return true
        }
    }
}

todosColores = () => {
    for (let color of filtroColores) {
        if (color.value === "todos" && color.checked) {
            return true
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
 */


/*-------------------- CODIGO NUEVO ----------------------------*/



busqueda.oninput = () => { 
    filtrarTarjetas()
}

for (let radio of sexos) {
    radio.oninput = () => {
        filtrarTarjetas()
    }
}

for (let checkbox of filtroColores) {
    checkbox.oninput = () => {
      filtrarTarjetas()
    }
}

const filtrarTarjetas = () => {
    for (let card of cards) {
        if (pasaFiltros(card)) {
            mostrarTarjetas(card)
        }
        else {
            ocultarTarjetas(card)
        }
    }
}


const mostrarTarjetas = (card) => {
    return card.classList.remove("hidden")
}

const ocultarTarjetas = (card) => {
    return card.classList.add("hidden")
}

const hayAlgunCheckboxChequeado = () => {
    for (let checkbox of filtroColores) {
        if (checkbox.checked) {
            return true
        }
    }
    return false
}

const hayAlgunRadioSeleccionado = () => {
    for (let radio of sexos) {
        if (radio.checked) {
            return true
        }
    }
    return false
}

const hayAlgoEscritoEnInput = () => {
    return Boolean(busqueda.value)
}


const coincideBusquedaInputConTarjeta = (card) => {
    const nombreTarjeta = card.dataset.nombre
    const busquedaUsuario = busqueda.value.toLowerCase()
    
    if (nombreTarjeta.includes(busquedaUsuario)) {
        return true
    }
    else {
        return false
    }
}


const pasaFiltros = (card) => {

  /*   if (hayAlgoEscritoEnInput()) {
        return coincideBusquedaInputConTarjeta(card)
    }
    else {
        return true
    } */

  /*   if (hayAlgunCheckboxChequeado()) {
        for (let checkbox of filtroColores) {
            if (checkbox.value === card.dataset.color && checkbox.checked) {
                return true
            }
            if (checkbox.value === "todos" && checkbox.checked) {
                return true
            }
        }
        return false
    }
    else {
        return true
    } */

    if (hayAlgunRadioSeleccionado()) {
        for (let radio of sexos) {
            if (radio.value === card.dataset.sexo && radio.checked) {
                return true
            }
           
        }
        return false
    }
    else {
        return true
    }




}



 