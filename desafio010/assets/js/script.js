function calcular() {
    var num01 = Number(prompt('Digite o primeiro valor: '))
    var num02 = Number(prompt('Digite o segundo valor: '))
    var oper = Number(prompt(`Ok!\n  Valores ${num01} e ${num02} informados.\n O que vamos fazer?\n [1] Somar\n [2] Subtrair\n [3] Multiplicar\n [4]Dividir`))
    var resultado = document.getElementById('resultado')



    switch (oper) {
        case 1:
            resultado.innerHTML += `<p>${num01} + ${num02} = ${num01 + num02} </p>`
            break;
        case 2:
            resultado.innerHTML += `<p>${num01} - ${num02} = ${num01 - num02} </p>`
            break
        case 3:
            resultado.innerHTML += `<p>${num01} x ${num02} = ${num01 * num02} </p>`
            break
        case 4:
            resultado.innerHTML += `<p>${num01} / ${num02} = ${num01 / num02} </p>`
            break
    
        default:
            resultado.innerHTML += `<p>[ERRO] Você digitou ${num01} e ${num02}, mas nao informou qual operação deseja executar! </p>`
            break;
    }

}

function limpar () {
    resultado.innerHTML = ''
}