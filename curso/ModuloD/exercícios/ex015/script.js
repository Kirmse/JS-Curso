function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = Number(document.getElementById('txtano').value)
    var res = document.querySelector('div#res')

    anoCalculo = ano - 120

    if (formularioAno >= anoCalculo && formularioAno <= ano) {
        var formularioSexo = document.getElementsByName('radsex')
        var idade = ano - formularioAno
        var genero = ''
        var img = document.createElement('img')  // <---- Criando um IMG 
        img.setAttribute('id', 'foto')

        if (formularioSexo[0].checked) {
            genero = 'homem'

            if (idade >= 0 && idade < 14) {
                //CRIANÇA
                img.setAttribute('src', 'homemcrianca.png')
            } else if (idade <= 21) {
                //JOVEM
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade <= 50) {
                //ADULTO
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'homemidoso.png')
            }

        } else if (formularioSexo[1].checked) {
            genero = 'mulher'

            if (idade >= 0 && idade < 14) {
                //CRIANÇA
                img.setAttribute('src', 'mulhercrianca.png')
            } else if (idade <= 21) {
                //JOVEM
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade <= 50) {
                //ADULTO
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'mulheridosa.png')
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Voce é <strong>${genero}</strong> e tem <strong>${idade} anos</strong>.`
        res.appendChild(img)


    } else {
        window.alert('inválido')
    }
}

// --------------------- BUTÃO ----------------------------

var mouse = window.document.getElementById('butao')

mouse.addEventListener('mouseenter', entrar)
mouse.addEventListener('mouseout', sair)
mouse.addEventListener('click', clicar)
mouse.addEventListener('mousedown', pressionar)


function entrar() {
    document.getElementById('butao').style.backgroundColor = 'green'
}
function sair() {
    mouse.style.backgroundColor = 'rgb(0, 193, 0)'
}
function clicar() {
    mouse.style.backgroundColor = 'rgb(0, 230, 0)'
}
function pressionar() {
    document.getElementById('butao').style.backgroundColor = 'rgb(0, 230, 0)'
}