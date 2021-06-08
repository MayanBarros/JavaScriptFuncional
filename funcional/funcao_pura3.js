let qtdeDeExecucoes = 0


// Pura!
function somar(a, b) {
    qtdeDeExecucoes++ // efeito colaterais observáveis
    return a + b
}

console.log(qtdeDeExecucoes)
console.log(somar(65, 32))
console.log(somar(65, 32))
console.log(somar(65, 32))
console.log(somar(65, 32))
console.log(qtdeDeExecucoes)