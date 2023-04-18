
const personagem = document.querySelector('#personagem')
const quadrado = document.querySelector("#quadrado")

function pular(){
    if (personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 400)
}

let testarColisao = setInterval(function(){

    let topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    let EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
    )

    if (EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 130){
        quadrado.style.animation = 'none';
        quadrado.style.display = 'nome'
        alert('você perdeu!')

    }
}, 10)