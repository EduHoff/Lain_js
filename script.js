var botao = document.getElementById('btn');
var infanity_intro = new Audio('midia/infanity_intro.wav');
var infanity_loop = new Audio('midia/infanity_loop.wav');
var infanity_end = new Audio('midia/infanity_end.wav');

function intro() {

    botao.innerHTML = "Loading..."; // Altera o texto
    botao.disabled = true;


    
    infanity_intro.play();
    infanity_intro.onended = function() {
    loop();
    }
}


function loop(){
    
    botao.innerHTML = "Stop loop";
    botao.disabled = false;

    
    infanity_loop.loop = true;
    infanity_loop.play();
}


function end(){
    
    infanity_loop.loop = false;
    botao.disabled = true; 
    botao.innerHTML = "Loop interrupted!";

    infanity_loop.onended = function() {
        infanity_end.play();
        }

}