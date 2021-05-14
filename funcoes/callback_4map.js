const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99 },
    { nome: 'Mochila', quantidade: 1, preco: 76.27 },
    { nome: 'Caderno', quantidade: 2, preco: 50.00 },
    { nome: 'Estojo', quantidade: 1, preco: 10.00 },
    { nome: 'Tinta', quantidade: 6, preco: 20.99 },
]

const getNome = product => product.nome
console.log(carrinho.map(getNome))

const getTotal = product => product.preco * product.quantidade
const totais = carrinho.map(getTotal)
console.log(totais)