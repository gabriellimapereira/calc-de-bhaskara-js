var clic = window.document.getElementById('botao')
     clic.addEventListener('click', clicar)
     clic.addEventListener('mouseout', sair)
     clic.addEventListener('mouseenter', entrar)

//funções

function clicar(){
    botao.style.backgroundColor = '#'
    botao.style.fontWeigth = 'bold' 
}

function entrar(){
    botao.style.backgroundColor = '#d3ccd0'
}

function sair(){  
    botao.style.backgroundColor = 'white'
}

//cálculo

function bhas(){
    var n1 = window.document.getElementById('txtn1')
    var n2 = window.document.getElementById('txtn2')
    var n3= window.document.getElementById('txtn3')
    var res1 = window.document.getElementById('resu1')
    var res2 = window.document.getElementById('resu2')
    var a = Number.parseFloat(n1.value)
    var b = Number.parseFloat(n2.value)
    var c = Number.parseFloat(n3.value)
    var delta = b**2 - 4*a*c
    if (delta < 0) {
        res1.innerHTML = "<p>Resultado inválido!</p>"
        res2.innerHTML = `<p>O delta foi ${delta}, negativo. Portanto, o cálculo não pode ser efetuado. Tente com outros valores.</p>`
    } else {
    var resul1 = Number.parseFloat((-1*b + Math.sqrt(delta))/(a*2))
    var resul2 = Number.parseFloat((-1*b - Math.sqrt(delta))/(a*2))
    var result1 = resul1.toFixed(5)
    var result2 = resul2.toFixed(5)
    res1.innerHTML = `<p>O resultado do X positivo é <strong> ${result1}<strong></p> `
    res2.innerHTML = `<p>O resultado do X negativo é <strong> ${result2}<strong></p>`
          }
}