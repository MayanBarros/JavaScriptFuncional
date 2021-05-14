const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99 },
    { nome: 'Mochila', quantidade: 1, preco: 76.27 },
    { nome: 'Caderno', quantidade: 2, preco: 50.00 },
    { nome: 'Estojo', quantidade: 1, preco: 10.00 },
    { nome: 'Tinta', quantidade: 6, preco: 20.99 },
]

Array.prototype.meuMap = function(fn) {
    const novoArray = []
    for( let i = 0 ; i < this.length ; i++ ) {
        const resultado = fn(this[i], i, this)
        novoArray.push(resultado)
    }
    return novoArray
}

const getNome = product => product.nome
console.log(carrinho.meuMap(getNome))

const getTotal = product => product.preco * product.quantidade
const totais = carrinho.meuMap(getTotal)
console.log(totais)


