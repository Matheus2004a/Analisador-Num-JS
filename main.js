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
        error.innerHTML = ""
    } else {
        error.innerHTML = "<font color='#ff0000'>Valor inválido ou já encontrado na lista</font>"
        form.appendChild(error)
    }
    numEsc.value = ""
    console.log(listNumbers)
}

const error = document.createElement("p")

const btnClear = document.querySelector("#btn-clear")
btnClear.addEventListener("click", stopOperations)

function stopOperations() {
    if (listNumbers.length === 0) {
        error.innerHTML = "<font color='#ff0000'>Adicione valores antes de finalizar</font>"
        form.appendChild(error)
        numEsc.focus()
    } else {
        makeOperations()
        error.innerHTML = ""
        numEsc.value = ""
        numEsc.focus()
    }
}

function addValues() {
    let itemTable = document.createElement("option")
    itemTable.text = `Valor ${numEsc.value} adicionado`
    list.appendChild(itemTable)

    resultList.innerHTML = ""
}

function makeOperations() {
    let sumNumbers = 0
    let numBiggest = 0
    let smallestNum = 0
    let mediaValues = 0

    for (let item in listNumbers) {
        sumNumbers += listNumbers[item]

        if (listNumbers[item] >= numBiggest) {
            numBiggest = listNumbers[item]
        }
        else {
            smallestNum = listNumbers[item]
        }
    }
    mediaValues = sumNumbers / listNumbers.length

    resultList.innerHTML = `Ao todo temos ${listNumbers.length} números cadastrados. <br>`
    resultList.innerHTML += `Somando todos os valores, temos ${sumNumbers}. <br>`
    resultList.innerHTML += `O maior número é: ${numBiggest}. <br>`
    resultList.innerHTML += `O menor número é: ${smallestNum}. <br>`
    resultList.innerHTML += `A média de todos os valores é: ${mediaValues.toFixed(2)}`
}