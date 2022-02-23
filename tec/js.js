function criarSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false, timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let time = 0;

function cronometro(){
    time = setInterval(function (){
        segundos++;
        relogio.innerHTML = criarSegundos(segundos);
    }, 1000)
}

document.addEventListener('click', function (e){
    const target = e.target;

    if(target.classList.contains('iniciar')){
        clearInterval(time);
        cronometro();
    }
    if(target.classList.contains('pausar')){
        clearInterval(time);
    }
    if(target.classList.contains('zerar')){
        clearInterval(time);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
    
})
console.log(criarSegundos(10));