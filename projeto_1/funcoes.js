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

function agruparElementos(palavras) {
    return Object.values(palavras.reduce((agrupador, palavra) => {
        const el = palavra.toLowerCase()
        const quantidade = agrupador[el] ? agrupador[el].quantidade + 1 : 1
        agrupador[el] = { elemento: el, quantidade }
        return agrupador
    }, {}))
}

function ordenarPorAtribNumerico(attr, ordem = 'asc') {
    return function(array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const dec = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(ordem === 'asc' ? asc : dec)
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
    separarTextoPor,
    agruparElementos,
    ordenarPorAtribNumerico
}
