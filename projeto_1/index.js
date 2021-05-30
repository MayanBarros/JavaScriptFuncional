const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', ',', '-', '"', '♪', '_',
     '<i>', '</i>', '\r', '[', ']', '(', ')', '!'
]

function agruparPalavras(palavras) {
    return palavras.reduce((agrupador, palavra) => {
        const p = palavra.toLowerCase()
        if (agrupador[p]) {
            agrupador[p] += 1
        } else {
            agrupador[p] = 1
        }
        return agrupador
    }, {})
}

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
    .then(agruparPalavras)
    .then(console.log)
