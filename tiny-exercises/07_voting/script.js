var idade = 70
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) { //podia ter (idade >= 16 && idade <18) mas é redundante
    console.log('Voto opcional')
} else { //Aqui podia ter tambem (idade >= 18 && idade <= 65) mas tambem é redundante 
    console.log('Voto obrigatório')
}