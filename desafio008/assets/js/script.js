var resultado = document.getElementById('resultado')

function limpar() {
    resultado.innerHTML = '<p>Cada vez que você apertar o botão acima, eu penso em um número entre <strong>1</strong> e <strong>100</strong>.</p>'
}

function calcular() {
    var num = Math.floor(Math.random() * 100)
    resultado.innerHTML += `<p>Acabei de pensar em um número: <strong>${num}</strong>!</p>`
}