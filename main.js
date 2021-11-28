let numEsc = document.querySelector("#txt-esc")

const table = document.querySelector("select option")
const error = document.querySelector("#error")

const btnGenerateTable = document.querySelector("#btn-submit")
btnGenerateTable.addEventListener("click", () => {
    if (numEsc.value === "") {
        error.innerHTML = "<font color='red'>Insira um número da tabuada</font>"
    } else {
        let formatNumEsc = Number(numEsc.value)
        for (let count = 0; count <= 10; count++) {
            table.innerHTML = `${formatNumEsc} X ${count} = ${formatNumEsc * count}`
        }
    }
})

const btnClear = document.querySelector("#btn-clear")
btnClear.addEventListener("click", () => {
    error.innerHTML = ""
    table.innerHTML = "Digite um número acima"
    numEsc.value = ""
    numEsc.focus()
})