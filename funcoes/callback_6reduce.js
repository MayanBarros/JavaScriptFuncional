const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99 },
    { nome: 'Mochila', quantidade: 0, preco: 76.27 },
    { nome: 'Caderno', quantidade: 2, preco: 50.00 },
    { nome: 'Estojo', quantidade: 1, preco: 10.00 },
    { nome: 'Tinta', quantidade: 6, preco: 20.99 },
]
const somar = (acc, el) => acc + el 
const valorTotal = item => item.quantidade * item.preco

const totalGeral = carrinho
    .map(valorTotal)
    .reduce(somar, 0)
    .toFixed(2)
    .replace('.', ',')

console.log(totalGeral)

