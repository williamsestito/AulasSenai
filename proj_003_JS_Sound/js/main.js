function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento === null){
        alert('elemento nao encontratado');
    }
    if(elemento != null){
        elemento.play()
    }
}

const listasDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listasDeTeclas.length; contador++){

    const tecla = listasDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string
    
    tecla.onclick = function (){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(evento){
        console.log(evento.code === 'Space');

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}