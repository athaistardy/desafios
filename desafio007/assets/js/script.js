function calcular() {
    var nome = prompt('Olá! Por favor, informe seu nome: ')
    var anoNasc = Number(prompt(`Perfeito ${nome}! \nAgora informe o ano do seu Nascimento: `))
    var resultado = document.getElementById('resultado')
    
    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - anoNasc

    if(anoNasc > ano) {
        resultado.innerHTML = `[ERRO] Por favor, Insira um ano válido`
    } else {
        resultado.innerHTML = `<p>Olá ${nome}!<br> Se você nasceu em ${anoNasc}, então irá fazer (ou já fez) ${idade} anos em ${ano}`
    }
}