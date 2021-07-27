function textoComTamanhoEntre(min, max, erro, texto) {
    const tamanho = (texto || '').trim().length 

    if(tamanho < min || tamanho > max) {
        throw erro
    }
}

const p1 = { nome: 'A', preco: 15.99, desc: 0.35 }
textoComTamanhoEntre(4, 255, 'Nome Inválido!', p1.nome)