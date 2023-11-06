const ValorTotalCadaItem = document.querySelector('.vtci');
const percentual = document.querySelector('.percentual');
const btn = document.querySelector('.btn')
const qtd = document.querySelector('.qtd');
const vendas = document.querySelector('.vendas');
const preco = document.querySelector('.preco');
let valorpercentual = 0

btn.addEventListener('click', () => {    
    ValorTotalCadaItem.value = qtd.value * preco.value;
    valorpercentual = (qtd.value * preco.value / vendas.value) * 100
    percentual.value = valorpercentual +"%";
    console.log(percentual.value)
})
