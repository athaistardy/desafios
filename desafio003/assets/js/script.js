function calcular() {
    var num01 = Number(prompt(`Informe um número!`))
    var resultado = document.getElementById('resultado')
    
    if(num01 % 2 == 0) {
        resultado.innerHTML = `<p style='text-align:center;'>${num01} é <strong>PAR</strong></p>`
    } else if(num01 % 2 == 1) {
        resultado.innerHTML = `<p style='text-align:center;'>${num01} é <strong>IMPAR</strong></p>`
    } else {
        resultado.innerHTML = `<p style='text-align:center;'>Por favor, digite um <strong>Número válido</strong></strong>!</p>`
    }
}
