const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99, fragil: true },
    { nome: 'Mochila', quantidade: 1, preco: 76.27, fragil: false },
    { nome: 'Caderno', quantidade: 2, preco: 50.00, fragil: true },
    { nome: 'Estojo', quantidade: 1, preco: 10.00, fragil: false },
    { nome: 'Tinta', quantidade: 6, preco: 20.99, fragil: true },
]
// filter, map, reduce

// 1. fragil: true
// 2. qtde * preco -> total
// 3. media totais

const media = carrinho
    .filter(el => el.fragil)
    .map(el => el.preco * el.quantidade)
    .reduce((acc, el) => {
        const novaQuantidade = acc.quantidade + 1
        const novoTotal = acc.total + el
        return {
            quantidade: novaQuantidade,
            total: novoTotal,
            media: novoTotal / novaQuantidade
        }
    }, { quantidade: 0, total: 0, media: 0 })

console.log(media)
console.log(media.quantidade)
console.log(media.total.toFixed(2))
console.log(media.media.toFixed(2))