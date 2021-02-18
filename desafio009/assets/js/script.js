var resultado = document.getElementById('resultado')
var com = 0
var player = 0

function sortear() {
    var min = 1
    var max = 50
    var dif = max - min
    var aleatorio = Math.random()
    com = min + Math.trunc(dif * aleatorio)

}





function calcular() {
    var btn = document.getElementById('btn')

    player = Number(prompt('Dê um palpite: '))

    if(player < com) {
        resultado.innerHTML += `<p>Você falou ${player}. Meu número é MAIOR`
        btn.setAttribute('value', 'Tente Novamente!')
        
    } else if(player > com) {
        resultado.innerHTML += `<p>Você falou ${player}. Meu número é MENOR`
        btn.setAttribute('value', 'Tente Novamente!')
    } else if(player == com) {
        resultado.innerHTML += `<p>Parabéns, você acertou! O Número Sorteado era ${com}</p>`
        btn.style.display = 'none'
    }
}