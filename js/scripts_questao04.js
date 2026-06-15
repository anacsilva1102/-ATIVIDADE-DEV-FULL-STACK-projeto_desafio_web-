//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoal')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO 
formDados.addEventListener('submit', (evt)=>{
       evt.preventDefault()

       const objFormDados = new FormData(formDados)

let nome = objFormDados.get('nome')
let n1 = parseFloat(objFormDados.get('nota1'))
let n2 = parseFloat(objFormDados.get('nota2'))
let n3 = parseFloat(objFormDados.get('nota3'))

let media = (n1 + n2 + n3) / 3
let status = media >= 6 ? "Aprovado" : "Reprovado"

divResultado.innerHTML = `<div>
    ALUNO: ${ nome }<br>
    MÉDIA: ${ media.toFixed(2).replace('.', ',') }<br>
    STATUS: <strong>${ status }</strong>
</div>`

formDados.reset()
})

