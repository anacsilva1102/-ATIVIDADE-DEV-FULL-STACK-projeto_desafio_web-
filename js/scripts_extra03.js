//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoal')
const divResultado = document.querySelector('#div-dados')

//CAPTURANDO O EVENTO SUBMIT DO FORMULÁRIO 
formDados.addEventListener('submit', (evt)=>{
       evt.preventDefault()

       const objFormDados = new FormData(formDados)

       let nome = objFormDados.get('nome')
       let valorCompra = parseFloat(objFormDados.get('valor_compra'))
       let valorVenda = 0;

       if (valorCompra < 10) {
              valorVenda = valorCompra + (valorCompra * 0.70)
       } else if (valorCompra >= 10 && valorCompra < 30) {
              valorVenda = valorCompra + (valorCompra * 0.50)
       } else if (valorCompra >= 30 && valorCompra < 50) {
              valorVenda = valorCompra + (valorCompra * 0.40)
       } else {
              // Maior ou igual a 50
              valorVenda = valorCompra + (valorCompra * 0.30)
       }

       let resultado = `
              Produto: <strong>${nome}</strong><br>
              Valor de Venda: <strong>R$ ${valorVenda.toFixed(2).replace('.', ',')}</strong>
       `

       divResultado.innerHTML = `<div>
              ${resultado}
       </div>`

       formDados.reset()
})