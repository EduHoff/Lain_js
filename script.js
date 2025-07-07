const btn = document.querySelector('#btn');
const loopCount = document.querySelector('#loopCount');
let count = 0;
let shouldLoop = true;

const infanity_intro = new Audio('midia/infanity_intro.wav');
const infanity_loop = new Audio('midia/infanity_loop.wav');
const infanity_end = new Audio('midia/infanity_end.wav');



function intro() {

    btn.innerHTML = "Loading...";
    loopCount.innerHTML = count;
    btn.disabled = true;
    btn.classList.add("bg-warning", "text-white");
    

    infanity_intro.play();
    infanity_intro.onended = function() {
    loop();
    }
}


function loop(){
    
    btn.innerHTML = "Stop loop";
    count++;
    loopCount.innerHTML = count;
    btn.disabled = false;
    btn.classList.remove("bg-warning", "text-white");
    btn.classList.add("bg-success", "text-white");

    infanity_loop.play();

    infanity_loop.onended = function () {
        if (shouldLoop) {
            count++;
            loopCount.innerHTML = count;
            infanity_loop.play();
        } else {
            infanity_end.play();
        }
    };
}


function end(){
    
    shouldLoop = false;
    btn.disabled = true; 
    btn.innerHTML = "Loop interrupted!";
    btn.classList.remove("bg-success", "text-white");
    btn.classList.add("bg-light", "text-dark");
}