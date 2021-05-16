function bomDia() {
    console.log('Boa Dia !!!')
}

const boaTarde = function() {
    console.log('Boa Tarde !!!')
}

// Passar uma função como param para outra função
function executarQualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(boaTarde)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(3)

// Retornar uma função a partir de uma outra função

function potencia(base) {
    return function(exp) {
        return base**exp
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))
console.log(potencia(5)(4))

const pot3e4 = potencia(3)(2)
console.log(pot3e4)