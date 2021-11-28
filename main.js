let numEsc = document.querySelector("#txt-esc")

const table = document.querySelector("select")
const error = document.querySelector("#error")

const form = document.querySelector("form")
form.addEventListener("submit", event => {
    event.preventDefault()
})

const btnGenerateTable = document.querySelector("#btn-submit")
btnGenerateTable.addEventListener("click", () => {
    if (numEsc.value === "") {
        error.innerHTML = "<font color='red'>Insira um número da tabuada</font>"
        table.innerHTML = ""
    } else {
        let formatNumEsc = Number(numEsc.value)
        clearTableAndError()
        for (let count = 0; count <= 10; count++) {
            let itemTable = document.createElement("option")
            itemTable.text = `${formatNumEsc} X ${count} = ${formatNumEsc * count}`
            table.appendChild(itemTable)
        }
    }
})

const btnClear = document.querySelector("#btn-clear")
btnClear.addEventListener("click", () => {
    clearTableAndError()
    table.innerHTML = "Digite um número acima"
    numEsc.value = ""
    numEsc.focus()
})

function clearTableAndError() {
    error.innerHTML = ""
    table.innerHTML = ""
}