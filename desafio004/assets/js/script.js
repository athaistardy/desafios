function calcular() {
    var nome = prompt('Olá! Como posso chamar você?')
    var num01 = Number(prompt(`Ok ${nome}, vamos começar! Digite o primeiro Número`))
    var num02 = Number(prompt(`Muito bom ${nome}! Agora Digite o segundo Número`))
    var resultado = document.getElementById('resultado')
    
    if(num01 > num02) {
        resultado.innerHTML = `<p style='text-align:center;'>Analisando os valores ${num01} e ${num02}, o <strong>MAIOR</strong> valor é ${num01}</p>`
    } else if(num01 < num02) {
        resultado.innerHTML = `<p style='text-align:center;'>Analisando os valores ${num01} e ${num02}, o <strong>MAIOR</strong> valor é ${num02}</p>`
    } else {
        resultado.innerHTML = `<p style='text-align:center;'>Analisando os valores ${num01} e ${num02}, ambos são <strong>IGUAIS</strong></p>`
    }
}