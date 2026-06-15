//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoal')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO 
formDados.addEventListener('submit', (evt)=>{
       evt.preventDefault()

       const objFormDados = new FormData(formDados)

       let codigo = objFormDados.get('codigo')
       let senha = objFormDados.get('senha')

       let resultado = ''

       if (codigo === 'ABCD1234' && senha === '1234') {
              resultado = `ACESSO PERMITIDO`
       } else {
              resultado = `ACESSO NEGADO`
       }

       divResultado.innerHTML = `<div>
              ${resultado}
       </div>`

       formDados.reset()
})

