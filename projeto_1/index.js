const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', ',', '-', '"', '♪', '_',
     '<i>', '</i>', '\r', '[', ']', '(', ')', '!'
]

fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt'))
    .then(arquivosSTR => fn.lerArquivos(arquivosSTR))
    .then(conteudos => conteudos.join('\n'))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementosSeIncluir('-->'))
    .then(fn.removerApenasNumero)
    .then(linhas => linhas.map(fn.removerEspacoVazio))
    .then(fn.removerSimbolos(simbolos))
    .then(console.log)
