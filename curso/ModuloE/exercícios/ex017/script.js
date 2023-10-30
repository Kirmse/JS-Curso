function calculo() {
var num = document.getElementById('num')
var tab = document.getElementById('seltab')

if ( num.value.length == 0) {
    window.alert('[ERROR]: Digite um número')
} else {
    let n = Number(num.value)
    tab.innerHTML = ''
    for (var a = 1 ; a <= 10 ; a++) {
       let item = document.createElement('option')
       item.text = `${n} x ${a} = ${n*a}`
       item.value = `tab${a}`
       tab.appendChild(item)
    }
}

}