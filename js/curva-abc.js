const vtci = document.querySelector('.vtci');
const pa = document.querySelector('.percentual');
const btn = document.querySelector('.btn')
const qtd = document.querySelector('.qtd');
const vendas = document.querySelector('.vendas');
const preco = document.querySelector('.preco');


btn.addEventListener('click', () => {
    vtci.value = qtd.value * preco.value;
    pa.value = (qtd.value * preco.value / qtd) * 100;
    console.log(pa.value)
})
