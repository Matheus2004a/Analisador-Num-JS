let numEsc = document.querySelector("#num-esc")
let list = document.querySelector("select")
const resultList = document.querySelector(".content-resp")

const form = document.querySelector("form")
form.addEventListener("submit", event => {
    event.preventDefault()
})

let listNumbers = []

const btnGenerateNumbers = document.querySelector("#btn-submit")
btnGenerateNumbers.addEventListener("click", calcNumbers)

function isNumber(number) {
    if (Number(number) >= 1 && Number(number) <= 100) {
        return true
    } else {
        error.innerHTML = ""

        /* clearTableAndError() */
        /* makeOperations() */
    }
}

/* function inList(number, listVerify) {
    if (listVerify.indexOf(Number(number)) !== -1) {
        listNumbers.push(Number(number))
    } else {
        return false
    }

    makeOperations()
     if (listVerify.indexOf(listNumbers) !== -1) {
        listNumbers.push(Number(number))
        return true
    } else {
        return false
    } 
} */

function calcNumbers() {
    if (isNumber(numEsc.value)) {
        listNumbers.push(Number(numEsc.value))
        makeOperations()
    } else {
        verifyErrors()
    }
    /* if (numEsc.value === "" || numEsc.value <= 0 || numEsc.value > 100) {
        verifyErrors()
    } else {
        error.innerHTML = ""

        clearTableAndError()
        makeOperations()
    }*/
    console.log(listNumbers)
}

function makeOperations() {
    for (let item in listNumbers) {

        let itemTable = document.createElement("option")
        itemTable.innerHTML = `Valor ${listNumbers[item]} adicionado`
        list.appendChild(itemTable)

        /* let sumNumbers = 0
        let numBiggest

        sumNumbers += listNumbers[item]

        if (listNumbers[item] >= numBiggest) {
            numBiggest = listNumbers[item]
        } */

        /* resultList.appendChild(respInfosItems)
        let respInfosItems = document.createElement("p")
        respInfosItems.innerHTML = `Somando todos os valores, temos ${sumNumbers}.` */
    }
}

const btnClear = document.querySelector("#btn-clear")
btnClear.addEventListener("click", () => {
    if (numEsc.value === "") {
        error.innerHTML = "<font color='#ff0000'>Adicione valores antes de finalizar</font>"
        numEsc.focus()
        makeOperations()
    }
    else {
        clearTableAndError()
        numEsc.value = ""
        numEsc.focus()
    }
})

function clearTableAndError() {
    error.innerHTML = ""
}

const error = document.createElement("p")

function verifyErrors() {
    error.innerHTML = "<font color='#ff0000'>Valor inválido ou já encontrado na lista</font>"
    form.appendChild(error)
}