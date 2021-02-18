function calcular() {
    var nome = prompt('Qual o nome do aluno?')
    var md01 = Number(prompt(`Informe a primeira nota de ${nome}`))
    var md02 = Number(prompt(`${md01}. Certo, agora informe a segunda nota`))
    var resultado = document.getElementById('resultado')

    var media = (md01 + md02) / 2

    resultado.innerHTML = `<p>Calculando a Média final de <strong style='text-transform:uppercase;'>${nome}</strong></p>`
    resultado.innerHTML += `<p>As notas foram ${md01} e ${md02}</p>`
    resultado.innerHTML += `<p>A Média final é <strong style='color:red;'>${media}</strong></p>`
    
    if(media <= 6.5) {
        resultado.innerHTML += `<p><strong>REPROVADO!</strong> Estude um pouco mais!</p>`
    } else {
        resultado.innerHTML += `<p>O aluno está <strong>APROVADO</strong></p>`
    }
}
