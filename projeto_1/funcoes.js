const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos =  fs.readdirSync(caminho)
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo) )
            resolve(arquivos)           
        } catch (error) {
            reject(error)
        }
    })
}

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
            resolve(conteudo.toString())
        } catch (error) {
            reject(error)
        }
    })
}

function removerEspacoVazio(el) {
    return el.trim()
}

function removerApenasNumero(array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

function removerElementosSeIncluir(padraoTextual) {
    return function(array) {
        return array.filter(el => el.includes(padraoTextual) ? false : true)
    }
}

function removerElementosSeVazio(array) {
    return array.filter(el => el.trim())
}

function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function elementosTerminadosCom(extensao) {
    return function(array) {
        return array.filter(el => el.endsWith(extensao))
    }
}

function removerSimbolos(simbolos) {
    return function(array) {
        return array.map(el => {
            let textoSemSimbolos = el
            simbolos.forEach(simbolo => {
                textoSemSimbolos = textoSemSimbolos.split(simbolo).join('')
            })
            return textoSemSimbolos
        })
    }
}

function juntarElementos (array) {
    return array.join(' ')
} 

function separarTextoPor(simbolo) {
    return function(texto) {
        return texto.split(simbolo)
    }
}

module.exports = { 
    lerDiretorio,
    elementosTerminadosCom,
    lerArquivo,
    lerArquivos,
    removerElementosSeVazio, 
    removerElementosSeIncluir,
    removerApenasNumero,
    removerEspacoVazio,
    removerSimbolos,
    juntarElementos,
    separarTextoPor
}
