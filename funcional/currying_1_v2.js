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

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarErroPadrao = forcarTamanhoPadrao("Erro Padrão bla bla!")

const p1 = { nome: 'A', preco: 15.99, desc: 0.35 }
forcarErroPadrao(p1.nome)