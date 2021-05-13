let a = 6
console.log(a)

// Function Declaration

function bomDia() {
    console.log('Bom Dia !!!')
}

bomDia()

// Function Expression

const boaTarde = function() {
    console.log('Boa Tarde !!!')
}

boaTarde()

function somar(a = 0, b = 0) {
    return a + b
}

let resultado = somar(5, 5)
console.log(resultado)

resultado = somar(5, 5, 6)
console.log(resultado)

resultado = somar(5)
console.log(resultado)

resultado = somar()
console.log(resultado)