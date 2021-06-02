const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', ',', '-', '"', '♪', '_',
     '<i>', '</i>', '\r', '[', ']', '(', ')', '!'
]

fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt'))
    .then(fn.lerArquivos)
    .then(fn.juntarElementos)
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementosSeIncluir('-->'))
    .then(fn.removerApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(fn.juntarElementos)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerApenasNumero)
    .then(fn.agruparElementos)
    .then(fn.ordenarPorAtribNumerico('quantidade', 'dec'))
    .then(console.log)
