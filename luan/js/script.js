//dom

const lampada = document.querySelector('#lampada')
const bt01 = document.querySelector('#ligar')
const bt02 = document.querySelector('#desligar')

//eventos

bt01.addEventListener('click', ligar)
bt02.addEventListener('click', desligar)
lampada.addEventListener('dblclick', quebrar)

//função

function ligar(){
    lampada.src = 'imagens/acesa.gif'
}

function desligar(){
    lampada.src = 'imagens/apagada.gif'
}

function quebrar(){
    lampada.src = 'imagens/quebrada.jpg'
}

