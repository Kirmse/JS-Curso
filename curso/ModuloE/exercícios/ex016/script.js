function calculo() {


    var inicio = Number(document.getElementById('numInicio').value)
    var fim = Number(document.getElementById('numFim').value)
    var passo = Number(document.getElementById('numPasso').value)
    var msg = document.getElementById('res')
    var a = 0

    if (inicio == 0 || fim == 0 || passo == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        msg.innerHTML = 'Resultado: '

        if (passo <= 0) {
            window.alert('[ERRO] passo inválido!')
            p = 1
        } else {

            if (inicio < fim) {

                for (var a = inicio; a <= fim; a += passo) {
                    msg.innerHTML += ` ${a} \u{1F449}`
                }
                
                msg.innerHTML += ` FIM \u{1F33A}`
            } else {

                for (var a = inicio; a >= fim; a -= passo) {
                    msg.innerHTML += ` ${a} \u{1F449}`
                }

                msg.innerHTML += `  FIM \u{1F33A}`
            }
        }
    }


}