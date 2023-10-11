function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = Number(document.getElementById('txtano').value)
    var res = document.querySelector('div#res')
    
    anoCalculo = ano - 120

    if( formularioAno >= anoCalculo && formularioAno <= ano) {
        var formularioSexo = document.getElementsByName('radsex')
        var idade = ano - formularioAno
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formularioSexo[0].checked) {
            genero = 'Homem'
            
            if (idade >= 0 && idade <14 ){ 
                //CRIANÇA
                img.setAttribute('src', 'homemcrianca.png')
            }else if (idade <= 21){
                //JOVEM
                img.setAttribute('src', 'homemjovem.png')
            }else if (idade <= 50){
                //ADULTO
                img.setAttribute('src', 'homemadulto.png' )
            }else{
                //IDOSO
                img.setAttribute('src', 'homemidoso.png')
            }

        } else if (formularioSexo[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade <14 ){ 
                //CRIANÇA
                img.setAttribute('src', 'mulhercrianca.png')
            }else if (idade <= 21){
                //JOVEM
                img.setAttribute('src', 'mulherjovem.png')
            }else if (idade <= 50){
                //ADULTO
                img.setAttribute('src', 'mulheradulta.png' )
            }else{
                //IDOSO
                img.setAttribute('src', 'mulheridosa.png')
            }

        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Voce é ${genero} e tem ${idade} anos`
        res.appendChild(img)
        

    }else{
        window.alert('inválido')
    }
} 

// https://www.cursoemvideo.com/curso/javascript/aulas/condicoes-em-javascript/modulos/exercicios-javascript-parte-3/ 15:00