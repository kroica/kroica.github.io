
let score = 0;
let last_score = 0;
let beep = new Audio('beep.wav');

function addScore(value)
{
    last_score = score;
    score += value;
    document.getElementById("score").innerHTML = score;
}

function undo()
{
    score = last_score;
    document.getElementById("score").innerHTML = score;
}

function reset()
{
    score = last_score = 0;
    document.getElementById("score").innerHTML = score;
}

document.getElementById("undo").onclick = function (){
    undo();
    beep.play();
}

document.getElementById("reset").onclick = function (){
    reset();
    beep.play();
}

document.getElementById("ttr1").onclick = function (){
    addScore(1);
    beep.play();
}

document.getElementById("ttr2").onclick = function (){
    addScore(2);
    beep.play();
}

document.getElementById("ttr3").onclick = function (){
    addScore(4);
    beep.play();
}

document.getElementById("ttr4").onclick = function (){
    addScore(7);
    beep.play();
}

document.getElementById("ttr6").onclick = function (){
    addScore(15);
    beep.play();
}

document.getElementById("ttr8").onclick = function (){
    addScore(21);
    beep.play();
}