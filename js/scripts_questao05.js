//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoal')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO 
formDados.addEventListener('submit', (evt)=>{
       evt.preventDefault()

       const objFormDados = new FormData(formDados)

let l1 = parseFloat(objFormDados.get('lado1'))
let l2 = parseFloat(objFormDados.get('lado2'))
let l3 = parseFloat(objFormDados.get('lado3'))

let tipo = ""

if (l1 === l2 && l2 === l3) {
    tipo = "Equilátero"
} else if (l1 === l2 || l1 === l3 || l2 === l3) {
    tipo = "Isósceles"
} else {
    tipo = "Escaleno"
}

divResultado.innerHTML = `<div>
    <strong>TIPO DO TRIÂNGULO:</strong><br>
    ${ tipo }
</div>`

formDados.reset()
})
