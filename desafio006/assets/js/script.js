function analisar() {
    //var nome = prompt('Olá! Por favor, digite seu nome: ')
    var resultado = document.getElementById('resultado')

    var data = new Date()

    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()
    
    var diaSem = data.getDay()

    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()

    var mounth
    var dWeek
    
    switch(mes) {
        case 0:
            mounth =  'Janeiro'
            break
        case 1:
            mounth = 'Fevereiro'
            break
        case 2:
            mounth =  'Março'
            break
        case 3:
            mounth =  'Abril'
            break
        case 4:
            mounth =  'Maio'
            break
        case 5:
            mounth =  'Junho'
            break
        case 6:
            mounth =  'Julho'
            break
        case 7:
            mounth =  'Agosto'
            break
        case 8:
            mounth =  'Setembro'
            break
        case 9:
            mounth =  'Outubro'
            break
        case 10:
            mounth = 'Novembro'
            break
        case 11:
            mounth =  'Dezembro'
            break
    }

    switch(diaSem) {
        case 0:
            dWeek = 'Domingo'
            break
        case 1:
            dWeek = 'Segunda - feira'
            break
        case 2:
            dWeek = 'Terça - feira'
            break
        case 3:
            dWeek = 'Quarta - feira'
            break
        case 4:
            dWeek = 'Quinta - feira'
            break
        case 5:
            dWeek = 'Sexta - feira'
            break
        
        case 6:
            dWeek = 'Sábado'
            break
    }

    resultado.innerHTML = `<p>Hoje é ${dWeek}. </p> <p>Dia: ${dia} de ${mounth} de ${ano}. </p> <p>São exatamente ${hora}:${min}:${sec}</p>`

}