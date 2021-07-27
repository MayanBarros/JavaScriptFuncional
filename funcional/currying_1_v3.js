function textoComTamanhoEntre(min) {
    return function(max) {
        return function(erro) {
            return function(texto) {
                // Lazy Evaluation
                const tamanho = (texto || '').trim().length 
            
                if(tamanho < min || tamanho > max) {
                    throw erro
                } else {
                    console.log('Nome válido!')
                }
            }
        }
    }
}

function aplicarValidacao(fn) {
    return function(valor) {
        // Lazy Evaluation
        try {
            fn(valor)
        } catch (e) {
            return { error: e}
        }
    }
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarErroPadrao = forcarTamanhoPadrao("Erro Padrão bla bla!")
const validarNomeProduto = aplicarValidacao(forcarErroPadrao)

const p1 = { nome: 'A', preco: 15.99, desc: 0.35 }
const p2 = { nome: 'AB', preco: 15.99, desc: 0.35 }

console.log(validarNomeProduto(p1.nome))
console.log(validarNomeProduto(p2.nome))