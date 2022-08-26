var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
var resultado = document.getElementById("resultado")

calcularimc = () => {
    calculo = peso.value / (altura.value * altura.value)
    resultado.value = calculo
    console.log(calculo)
}

limpar = () => {
    altura.value = ""
    peso.value = ""
    resultado.value = ""
}

