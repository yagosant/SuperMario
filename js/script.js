
//pegando a classe do mario no HTML
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = ()=>{
    //add a classe jump a mario para realizar a animação
    mario.classList.add('jump');

    //retirando a classe para poder executar novamente
    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500);
}

//verifica se o jogador n perdeu ainda
const loop = setInterval(()=>{

    //verifica o deslocamento da esquerda
    const pipePosition = pipe.offsetLeft;

    //pegando as propriedades do mario
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); //o + converte a string para nmero

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 81 ){
        //remove a animação ao ter o conlfito
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
       
        mario.style.animation = 'none';
        pipe.style.bottom = `${marioPosition}px`;

        mario.src = 'images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '40px';

        clearInterval(loop);
    }
}, 10);


//pegando o evento do click
document.addEventListener('keydown', jump);