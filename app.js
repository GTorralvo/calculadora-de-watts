let consumo = document.getElementById("consumomedio")
let valor1 = 0.50
let valor2 = 0.70
let valor3 = 0.90
let valormensagem = 0
let button = document.getElementById("button")
let resultado = document.getElementById("resultado")

function calcularTotal(){

    let consumomedio = Number(consumo.value)
    let total

    if(consumomedio <= 100){
        total = consumomedio * valor1
        valormensagem = valor1
    }
    else if(consumomedio <= 200){
        total = consumomedio * valor2
        valormensagem = valor2
    }
    else{
        total = consumomedio * valor3
        valormensagem = valor3
    }

    resultado.innerHTML = `
        <p>O valor total da conta é R$ ${total.toFixed(2)}</p>
        <p>Você vai pagar R$${valormensagem.toFixed(2)} por kWh</p>
    `
}

button.addEventListener("click", calcularTotal)