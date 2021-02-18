function interagir() {
    var resultado = document.getElementById('resultado')
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth()
    var dia = data.getDate()

   // var hora = data.getHours()
   var hora = 10
    var min = data.getMinutes()

    var img = document.createElement('img')
    img.setAttribute("id", "foto")

    if(hora < 12) {
        img.setAttribute('src', 'assets/images/manha.png')
        document.body.setAttribute('style', 'background-color:#e8d5c5')
    } else if(hora < 18) {
        img.setAttribute('src', 'assets/images/tarde.png')
        document.body.setAttribute('style', 'background-color:#fdb255')
    } else {
        img.setAttribute('src', 'assets/images/noite.png')
        document.body.setAttribute('style', 'background-color:#112f48')
    }

    switch (mes) {
        case 0:
            mes = 'Janeiro'
            break
        case 1:
            mes = 'Fevereiro'
            break
        case 2:
            mes = 'Março'
            break
        case 3:
            mes = 'Abril'
            break
        case 4:
            mes = 'Maio'
            break
        case 5:
            mes = 'Junho'
            break
        case 6:
            mes = 'Julho'
            break
        case 7:
            mes = 'Agosto'
            break
        case 8:
            mes = 'Setembro'
            break
        case 9:
            mes = 'Outubro'
            break
        case 10:
            mes = 'Novembro'
        case 11:
            mes = 'Dezembro'
    }

    resultado.innerHTML = `<p style='text-align:center;'>Hoje é dia ${dia} de ${mes} de ${ano}</p>`
    resultado.innerHTML += `<p style='text-align:center;'>${hora}:${min}</p>`
    resultado += resultado.appendChild(img)

}