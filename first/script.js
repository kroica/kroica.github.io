
let higher_value = 0;
let max_roll = 100;
let success = new Audio('suc.wav');
let fail = new Audio('fal.wav');

function roll(){
    let rand = Math.floor(Math.random() * max_roll) + 1;
    console.log(higher_value + " " + rand)
    if(rand < higher_value){
        return false;
    }else if(rand > higher_value){
        higher_value = rand;
        return true;
    }else{
        let r1,r2;
        do{
            r1 = Math.floor(Math.random() * max_roll) + 1;
            r2 = Math.floor(Math.random() * max_roll) + 1;
        }while(r1 == r2);

        return r1 > r2;
    }
}

document.getElementById("player_button").onclick = function (){
    if(roll()){
        success.play();
    }else{
        fail.play();
    }
}