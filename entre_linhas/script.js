
const WORDS_BASE = ["Urso", "Bigode", "Férias", "Violão", "Laranja", "Montanha", "Médico", "Rápido", "Alegria"]
let words = ["um", "dois", "tres", "quatro"]
let labels = ["A", "1", "B", "2", "C", "3"]

words = WORDS_BASE
words.sort(() => Math.random() - 0.5);

roll();

function roll(){
    for(i = 0; i < 6; i++)
    {
        document.getElementById("word" + i).innerHTML = labels[i] + ". " + words.pop();
    }
}

document.getElementById("player_button").onclick = function (){
    roll();
}