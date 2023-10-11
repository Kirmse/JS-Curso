function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = Number(document.getElementById('txtano').value)
    var res = document.querySelector('div#res')
    var img = document.querySelector('img#imagem')
    
    anoCalculo = ano - 120

    if( formularioAno >= anoCalculo && formularioAno <= ano) {
        var formularioSexo = document.getElementsByName('radsex')
        var idade = ano - formularioAno
        var genero = ''
        
        if (formularioSexo[0].checked) {
            genero = 'Homem'
        } else if (formularioSexo[1].checked) {
            genero = 'Mulher'
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Voce é ${genero} e tem ${idade} anos`

        if (idade >=0 && idade <= 18){

        }else if (idade <= 50){

        }else{

        }

    }else{
        window.alert('inválido')
    }
} 

// https://www.cursoemvideo.com/curso/javascript/aulas/condicoes-em-javascript/modulos/exercicios-javascript-parte-3/ 15:00