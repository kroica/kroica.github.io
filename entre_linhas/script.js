
const WORDS_BASE = ["Urso", "Bigode", "Férias", "Violão", "Laranja", "Montanha", "Médico", "Rápido", "Alegria", "Chafariz", "Bola", "Feijoada", "Pantanal", "Noite", "Pesado", "Gato", "Amazônia", "Paçoca", "Cafuné", "Jogo de Tabuleiro", "Jogo de Cartas", "Saudade", "Pão de Queijo", "Relâmpago", "Flecha", "Viagem", "Dragão", "Carro", "Estranho", "Refeição", "Avião", "Trailer", "Veterinário", "Tubarão", "Notebook", "Mamadeira", "Bombom", "Pato", "Camelo", "Medo", "Cinza", "Óculos", "Cobra", "Estrada", "Bombeiro", "Palmeira", "Plástico", "Elástico", "Trigo", "Branco", "Circo", "Chocolate"]
let words = ["um", "dois", "tres", "quatro"]
let labels3 = ["A", "B", "C", "1", "2", "3"]
let labels4 = ["A", "B", "C", "D", "1", "2", "3", "4"]
let labels5 = ["A", "B", "C", "D", "E", "1", "2", "3", "4", "5"]
let mode = 0

words = WORDS_BASE
words.sort(() => Math.random() - 0.5);

function roll(){

    for(i = 0; i < 10; i++)
    {

        let element = document.getElementById("word" + i);
        element.classList.remove("hide");

        if(i >= 6 + (mode * 2))
        {
            element.classList.add("hide");
            continue;
        }

        let label;
        switch(mode)
        {
            case 0:
                label = labels3[i];
                break;
            case 1:
                label = labels4[i];
                break;
            case 2:
                label = labels5[i];
                break;
            default:
                label = "";
        }
        element.innerHTML = label + ". " + words.pop();
    }
}

document.getElementById("player_button").onclick = function (){
    roll();
}

document.getElementById("option1").onclick = function (){
    mode = 0;
}

document.getElementById("option2").onclick = function (){
    mode = 1;
}

document.getElementById("option3").onclick = function (){
    mode = 2;
}