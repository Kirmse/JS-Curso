function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var titulo = window.document.getElementById('titulo')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`

    
    if (hora >= 0 && hora <= 24) {
        if (hora >= 6 && hora <= 12) {
            // BOM DIA
            titulo.innerText = `Bom dia`
            img.src = 'fotomanhaa.png'
            document.body.style.background = '#fff6bd'
            section.style.color = '#fff6bd'
        } else if (hora > 12 && hora <= 18) {
            // BOA TARDE
            titulo.innerText = 'Boa tarde'
            img.src = 'fototarde.png'
            document.body.style.background = '#fda99c'
            section.style.color = '#fda99c'
        } else {
            // BOA NOITE
            titulo.innerText = 'Boa noite'
            img.src = 'fotonoite.png'
            document.body.style.background = '#353332'
            section.style.color = '#a0a0a0'
        }
    }else {
        msg.innerHTML = 'DUMB! Try again later...'
        img.src = 'dumb.png'
        document.body.style.background = '#fec301'
    }
    var voltar = document.getElementById('voltar')
    voltar.style.display = 'block'
}

function voltar(){
    var voltar = document.getElementById('voltar')
    voltar.style.display = 'none'
    location.reload()
}