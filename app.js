const computerText = document.getElementById('computer-Choice');
const userText = document.getElementById('user-Choice');
const resultText = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let user;
let computer;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    user = e.target.id;
    userText.innerHTML = user;
    computerTurn();
    computerText.innerHTML = computer;
    resultText.textContent = Rules();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum){
        case(1):
            computer = "rock";
            break;
        case(2):
            computer = "paper"; 
            break;
        case(3):
            computer = "scissor";    
            break;                   
    }
}

function Rules(){
    if(user==computer){
        return "DRAW";
    }
    else if(computer== "rock"){
        return (user == "paper")?"win":"lose";
    }
    else if(computer== "paper"){
        return (user == "scissor")?"win":"lose";
    }
    else if(computer== "scissor"){
        return (user == "rock")?"win":"lose";
    }
}