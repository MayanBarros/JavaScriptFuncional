
const numeros = [1, 2, 3, 4, 5]
const dobro = (n, i, a) => n * 2 + i + a.length
console.log(numeros.map(dobro))

const nomes = ['ana', 'bia', 'rafa', 'alana']
const primeiraletra = string => string[0]
const letras = nomes.map(primeiraletra)
console.log(nomes, letras)