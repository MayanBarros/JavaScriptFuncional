const carrinho = [
    { nome: 'Caneta', quantidade: 10, preco: 7.99 },
    { nome: 'Mochila', quantidade: 0, preco: 76.27 },
    { nome: 'Caderno', quantidade: 2, preco: 50.00 },
    { nome: 'Estojo', quantidade: 1, preco: 10.00 },
    { nome: 'Tinta', quantidade: 6, preco: 20.99 },
]

Array.prototype.meuFilter = function(fn) {
    const novoArray = []
    for (i = 0 ; i < this.length ; i++) {
        if(fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }

    return novoArray
}

const qntdMaiorQueZero = item => item.quantidade > 1
const precoMaiorQueDez = preco => preco.preco > 10.00
const getNome = nome => nome.nome

const itensValidos = carrinho.meuFilter(qntdMaiorQueZero)

precosValidos = itensValidos.meuFilter(precoMaiorQueDez)

const nomesValidos = itensValidos.map(getNome)

console.log(nomesValidos)
 
console.log(precosValidos)


