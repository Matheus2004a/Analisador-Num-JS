let numEsc = document.querySelector("#num-esc")
const list = document.querySelector("select")
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
        return false
    }
}

function inList(number, listVerify) {
    if (listVerify.indexOf(Number(number)) !== -1) {
        return true
    } else {
        return false
    }
}

function calcNumbers() {
    if (isNumber(numEsc.value) && !inList(numEsc.value, listNumbers)) {
        listNumbers.push(Number(numEsc.value))
        addValues()
        clearTableAndError()
    } else {
        verifyErrors()
    }
    console.log(listNumbers)
}

function addValues() {
    let itemTable = document.createElement("option")
    itemTable.text = `Valor ${numEsc.value} adicionado`
    list.appendChild(itemTable)
}

const btnClear = document.querySelector("#btn-clear")
btnClear.addEventListener("click", () => {
    let sumNumbers = 0
    let numBiggest = 0
    let smallestNum = 0
    let mediaValues = 0
    
    for (let item in listNumbers) {
        sumNumbers += listNumbers[item]

        if (listNumbers[item] >= numBiggest) {
            numBiggest = listNumbers[item]
        }

        if (smallestNum < listNumbers[item]) {
            smallestNum = listNumbers[item]
        }    
    }
    
    let respInfosItems = document.createElement("p")
    respInfosItems.innerHTML = `Somando todos os valores, temos ${sumNumbers}.`
    resultList.appendChild(respInfosItems)
    respInfosItems.innerHTML = `O maior número é: ${numBiggest}.`
    resultList.appendChild(respInfosItems)
    respInfosItems.innerHTML = `O menor número é: ${smallestNum}.`
    resultList.appendChild(respInfosItems)
    

    if (numEsc.value === "") {
        error.innerHTML = "<font color='#ff0000'>Adicione valores antes de finalizar</font>"
        numEsc.focus()
    } else {
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