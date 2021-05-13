// Arrow function
const arrow = () => console.log('Feliz Páscoa!!')
arrow()

const saudacao = nome => `Fala ${nome + ' Barros'}, blz !?!`
console.log(saudacao('Mayan'))

const somar = (...array) => {
     return array.reduce((acc, atual) => acc + atual)
}

console.log(somar(5, 5, 5, 5, 200, 500))

const potencia = (a) => (b) => console.log(a**b)
potencia(2)(10)

// this
Array.prototype.log = function() {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = () => {
    console.log(this[0])
}
const numeros = [1, 2, 3]
numeros.log()
numeros.primeiro()