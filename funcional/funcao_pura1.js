// Uma função pura é uma função em que o valor de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis

const PI = 3.14

// impura - PI é um valor externo!

function areaCirc(raio) {
    return raio * raio * PI // ou Math.PI
}

console.log(areaCirc(10))
console.log(areaCirc(10))
console.log(areaCirc(10))

// pura - não depende de algo externo!

function areaCircPura(raio, pi) {
    return raio * raio * pi
}

console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, 3.14))