let numEsc = document.querySelector("#txt-esc")

const table = document.querySelector("select option")
const error = document.querySelector("#error")

const btnGenerateTable = document.querySelector("#btn-submit")
btnGenerateTable.addEventListener("click", () => {
    if (numEsc.value === "") {
        error.innerHTML = "<font color='red'>Insira um número da tabuada</font>"
    } else {
        let count = 0
        while (numEsc.value <= 10) {
            table.value = `${numEsc.value} X ${count} = ${numEsc.value * count}`
            count++
        }
    }
})

const btnClear = document.querySelector("#btn-clear")
btnClear.addEventListener("click", () => {
    error.innerHTML = ""
    numEsc.value = ""
    numEsc.focus()
})