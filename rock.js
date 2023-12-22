let you;
let myScore = 0;
let opponent;
let opponentScore = 0;

let choices = ["./images/rock","./images/paper", "./images/scissors"];

window.onload = function(){
    for(let i = 0; i < 3; i++){
        //img id = "rock src= "./images/rock.png"
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}
function selectChoice(){
    you= this.id;
    document.getElementById("my-choice").src = you + ".png";
    //random for the opponent
    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";

    //check for winner
    if(you == opponent){
        myScore += 1;
        opponentScore += 1;
    }
    else {
        if(you == "rock"){
            if(opponent == "scissors"){
                myScore += 1;
            }
            else if(opponent == "paper"){
                opponentScore += 1;
            }
        }
        else if(you == "scisors"){
            if(opponent == "paper"){
                myScore += 1;
            }
            else if(opponent == "rock"){
                opponentScore += 1;
            }
        }
        else if(you == "paper"){
            if(opponent == "rock"){
                myScore += 1;
            }
            else if(opponent == "scissors"){
                opponentScore += 1;
            }
        }

    }
    document.getElementById("my-score").innerText = myScore;
    document.getElementById("my-score").innerText = opponentScore;

}



