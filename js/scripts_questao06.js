//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoal')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO 
formDados.addEventListener('submit', (evt)=>{
       evt.preventDefault()

       const objFormDados = new FormData(formDados)

let nome = objFormDados.get('nome')
let peso = parseFloat(objFormDados.get('peso').replace(',', '.'))
let altura = parseFloat(objFormDados.get('altura').replace(',', '.'))

let imc = peso / (altura * altura)
let faixaRisco = ""

if (imc < 20) {
    faixaRisco = "abaixo do peso"
} else if (imc >= 20 && imc < 25) {
    faixaRisco = "normal"
} else if (imc >= 25 && imc < 30) {
    faixaRisco = "excesso de peso"
} else if (imc >= 30 && imc <= 35) {
    faixaRisco = "obesidade"
} else {
    faixaRisco = "obesidade mórbida"
}

divResultado.innerHTML = `<div>
    PACIENTE: ${ nome }<br>
    IMC: ${ imc.toFixed(2).replace('.', ',') }<br>
    FAIXA DE RISCO: <strong>${ faixaRisco }</strong>
</div>`

formDados.reset()
})