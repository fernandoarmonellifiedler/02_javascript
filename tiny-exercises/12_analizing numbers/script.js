let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n , l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value , valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor incorreto ou repetido!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Inserir um valor antes de Finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>O total de valores inseridos é ${tot}.</p>`
    res.innerHTML += `<p>O menor número foi ${menor}.</p>`
    res.innerHTML += `<p>O maior número foi ${maior}.</p>`
    res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
    res.innerHTML += `<p>A media dos valores inseridos é ${media}.</p>`
    }
}
/*
pasos para começar:
- primeiro, pegar os controles básicos. número (fnum), lista (flista) , resultado (res) , vetor valores (sera usado para analizar os dados no final)
- function adicionar. verificar se é um numero e se esta na lista (criar 2 funções para isso. ambas retornam true e false)
- function isNumero. um parametro. ver se esta entre 1 e 100
- function isLista. tem dois parametros (numero e vetor) porque debe saber se o numero foi adicionado no array. usar o comando indexOf para procurar o valor na lista. se o resultado é -1 não achou o resultado
- 

pasos function adicionar:
- adicionar valor com o comando .push (num.value)
- adicionar ele no select. criar item
- adicionar o text e appendchild na lista
- para apagar o numero depois de adicionar deixamos o objeto num.value = ''. Depois, para deixar selecionado o campo usamos num.focus()
- zerar o res cada vez que adiciona um elemento

pasos function finalizar:
- primeiro, controle de erro. se o vetor estiver vazio não pode finalizar
- adicionar variaveis (total, maior, menor, soma e media)
- e mostrar eles no res.innerHTML +=
- zerar o res
- maior, menor: para analizar temos que começar do primeiro valor e ir analizando todos os outros. como ao analizar o primeiro o > e o < valor é 0. for( let in)
- ese mesmo pos (let in) será usado para a soma e a media. a soma vai somar o valor atual de valores. a media será colocada saindo da estrutura
*/