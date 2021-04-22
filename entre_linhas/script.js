
const WORDS_BASE = ["Urso","Bigode","Férias","Violão","Laranja","Montanha","Médico","Rápido","Alegria","Chafariz","Bola","Feijoada","Pantanal","Noite","Pesado","Gato","Amazônia","Paçoca","Cafuné","Jogo de Tabuleiro","Jogo de Cartas","Saudade","Pão de Queijo","Relâmpago","Flecha","Viagem","Dragão","Carro","Estranho","Refeição","Avião","Trailer","Veterinário","Tubarão","Notebook","Mamadeira","Bombom","Pato","Camelo","Medo","Cinza","Óculos","Cobra","Estrada","Bombeiro","Palmeira","Plástico","Elástico","Trigo","Branco","Circo","Chocolate","Peru","Aranha","Furadeira","Itália","Capital","Olimpíadas","Bota","Prego","Dia","Garfo","Advogado","Conta","Imagem","Figura","Garça","Força","Cenoura","Cachorro","Míssil","Concerto","Raio","lixo","Quadrado","Antarctica","Hollywood","Espinho","Pé","Xícara","Olho","Ar","Escorregar","Marcha","Ketchup","Arquivo","Parte","Código","Unicórnio","Relógio","Ver","Faca","Chip","Barco","Anel","Parede","Parque","Ciclo","Grilo","Magia","Dado","Atirar","Vacina","Monte","Cereja","Morango","Anjo","Foca","Selo","Flauta","Roleta","Lesma","Ladrão","Fantasma","America","Banco","Saturno","Bateria","Revolução","Motor","Espinha","Igreja","Pasta","Massa","Praia","Lutador","Satélite","Ventilador","Tela","Sorvete","Princesa","Sino","Gancho","Rabo","Presunto","Cozinha","Gelo","Pirata","Robô","Gás","Música","Rosa","Professor","França","Milionário","Penhasco","Pipa","Cano","Cachimbo","Laboratório","Estrela","Inseto","Piloto","Piano","Grama","Gigante","Água","Anão","Caixa","Cientista","Microscópico","Escola","Chifre","Tóquio","Som","Pupila","Cruz","Boca","Rede","Primavera","Carta","Dança","Polícia","Coração","Mel","Canguru","Ferradura","Telescópio","Mercúrio","Azeitona","Helicóptero","Palha","Nota","Modelo","Europa","Pincel","Graveto","Alfinete","Garrafa","Polegar","Asteca","Búfalo","Torre","Cerca","Vestido","Hotel","Moscou","Pistola","Vácuo","Campo","Dente","Mosca","Kiwi","Morte","Cavaleiro","Bomba","Régua","Luz","Águia","Centauro","Hospital","Shakespeare","Algodão","Vento","Maçã","Berlin","Cassino","Ouro","Botão","Centro","Cobre","Bezerro","Condutor","Linha","Alma","Teatro","Cabeça","Egito","Verde","Chá","Gravata","Nova Iorque","Poste","Opera","Fera","Espião","Meia","Coroa","Rei","Geleia","Sombra","Outono","Pinguim","Boneco de Neve","Ponto","Mergulhador","Alemanha","Jogo","Piscina","Capa","Etiqueta","Banda","Guerra","Roma","Van","Dinossauro","Mina","Cheque","Morcego","Composto","Super-herói","Criança","Himalaia","Rascunho","Quadrinhos","Raiz","Arco","Frio","Braço","Cama","Gênio","Floresta","Mesa","Chumbo","Ponte","Lua","África","Laser","Chão","Rosto","Neve","Nozes","Graus","Leão","Inglaterra","Peixe","Correio","Mão","Alpes","Panela","Triângulo","Ambulância","Torta","Agulha","Veneno","Porto","Cavalo","Espaço","Gota","Diamante","Enfermeira","Londres","Fogo","Papel","México","Pedra","Luva","Minhoca","India","Barra","Trem","Buraco","Data","Austrália","Chave","Prancha","Senha","Sapato","Estátua","Sorte","Óleo","Chicote","Rato","Cadeado","Templo","Novela","Lavadora","Doença","Loja","Baleia","Falção","Coelho","Tubo","Canadá","Carga","Plano","Agente","Baralho","Limão","Batida","Raquete","Calça","Vida","Tempo","Partida","Alien","Poço","Pinto","Embaixada","Vidro","Polvo","Círculo","Grécia","Pequim","Mamute","Tronco","Cinto","Órgão","Mármore","Cadeira","Pirâmide","Pia","Filme","Júpiter","Enredo","Jato","Ninja","Contrato","Bruxa","Limousine","Balança","Arranha-céu","China","Doutor","Rainha","Escorpião","Soldado","Corte","Onda","Terno","Duende","Ferro","Estádio","Atlantis","Menta","Abóbora","Fenix","Bloco","Paraquedas","Bahia","Bermuda","Prata","Vermelho","Amarelo","Preto","Azul"]
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