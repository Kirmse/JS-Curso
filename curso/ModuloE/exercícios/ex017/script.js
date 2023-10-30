function calculo() {
var num = Number(document.getElementById('num').value) 
var msg = document.getElementById('res')

for (var a = 1 ; a <= 10 ; a++) {
    resultado = num*a
    msg.innerHTML += resultado
}

}