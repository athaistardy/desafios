function processar() {
    var mes = prompt('Informe o Mês: ').toLowerCase()
    var resultado = document.getElementById('resultado')
    var titletxt = document.getElementById('title-txt')
    var img = document.createElement('img')
    


    switch(mes) {
        case 'outubro':
        case 'novembro':
        case 'dezembro':
            resultado.innerHTML = `<p>Você digitou ${mes}. <br> Estamos na Primavera!</p>`
            img.setAttribute('src', 'assets/images/primavera.png')
            document.body.style.background = '#9d3f60'
            break

        case 'janeiro':
        case 'fevereiro':
        case 'março':
            resultado.innerHTML = `<p>Você digitou ${mes}. <br> Estamos no Verão!</p>`
            img.setAttribute('src', 'assets/images/verao.png')
            document.body.style.background = '#64bbb7'
            break
            
        case 'abril':
        case 'maio':
        case 'junho':
            resultado.innerHTML = `<p>Você digitou ${mes}. <br> Estamos no Outono!</p>`
            img.setAttribute('src', 'assets/images/outono.png')
            document.body.style.background = '#ee8815'
            break

        case 'julho':
        case 'agosto':
        case 'setembro':
            resultado.innerHTML = `<p>Você digitou ${mes}. <br> Estamos no Inverno!</p>`
            img.setAttribute('src', 'assets/images/inverno.png')
            document.body.style.background = '#efedf3'
            titletxt.style.color = '#000'
            break
    }

    resultado.appendChild(img)
}