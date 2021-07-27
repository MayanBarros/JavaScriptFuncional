const pessoa = Object.freeze({
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: Object.freeze({
        rua: 'Ulisses'
    })
})

// Atribuição por Referência
const outraPessoa = pessoa

// Passagem por Referência...
function alteraPessoa(pessoa) {
    const novaPessoa = { ...pessoa }
    novaPessoa.nome = 'Jõao'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua = 'ABC'
    return novaPessoa
}


const novaPessoa = alteraPessoa(pessoa)
console.log(novaPessoa)

let a = 3
let b = a // atribuição por valor (cópia!)

a++
b--

console.log(a, b)