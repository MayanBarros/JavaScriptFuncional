
function somar(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3
        }
    }
}

const somarnum1num2 = somar(3)(4)
console.log(somarnum1num2(5))
console.log(somarnum1num2(3))
console.log(somar(3)(3)(3))


function Calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x, y)
        }
    }
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

const r1 = Calcular(10)(5)(subtrair)
const r2 = Calcular(10)(5)(multiplicar)
console.log(r1)
console.log(r2)