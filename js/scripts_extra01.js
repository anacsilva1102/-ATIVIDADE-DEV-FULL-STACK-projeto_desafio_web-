//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoal')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO 
formDados.addEventListener('submit', (evt)=>{
       evt.preventDefault()

       const objFormDados = new FormData(formDados)

       let numero = parseFloat(objFormDados.get('numero'))

       let res3 = numero % 3 === 0 ? "é" : "NÃO é";
       let res7 = numero % 7 === 0 ? "é" : "NÃO é";

       divResultado.innerHTML = `<div>
              O número ${numero} <strong>${res3}</strong> divisível por 3.<br>
              O número ${numero} <strong>${res7}</strong> divisível por 7.
       </div>`

       formDados.reset()
})
