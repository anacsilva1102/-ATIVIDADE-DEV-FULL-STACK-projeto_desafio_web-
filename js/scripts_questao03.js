//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoal')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO 
formDados.addEventListener('submit', (evt)=>{
       evt.preventDefault()

       const objFormDados = new FormData(formDados)

let distancia = parseFloat(objFormDados.get('distancia'))

let consumo = parseFloat(objFormDados.get('consumo'))

let preco = parseFloat(objFormDados.get('preco'))

let quantidadeCombustivel = distancia / consumo
let valorTotal = quantidadeCombustivel * preco

divResultado.innerHTML = `<div>
    QUANTIDADE DE COMBUSTÍVEL NECESSÁRIA: ${ quantidadeCombustivel.toFixed(2).replace('.', ',') } L <br>
    VALOR TOTAL A PAGAR: R$ ${ valorTotal.toFixed(2).replace('.', ',') }
</div>`

formDados.reset()
})
