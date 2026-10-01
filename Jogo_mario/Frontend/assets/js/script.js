const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const  nuvem = document.querySelector('.nuvem')

const jump= () => {
    mario.classList.add('pulo');

    setTimeout(() =>{
        mario.classList.remove('pulo');

    }, 600)
}

/*Mecânica de gameover*/
const loop = setInterval(() => {



    const canoposit = cano.offsetLeft;
    const marioposit = window.getComputedStyle(mario).bottom.replace('px','');
    const nuvemposit = nuvem.offsetLeft;

    if (canoposit <= 120 && canoposit >0 && marioposit <= 80){
    cano.style.animation = "none";
    cano.style.left = `${canoposit}px`;

    mario.style.animation = "none";
    mario.style.left = `${marioposit}px`;

    nuvem.style.animation = "none"
    nuvem.style.left = `${nuvemposit}`

    mario.src = "./assets/images/game-over.png";
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';    

    clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);