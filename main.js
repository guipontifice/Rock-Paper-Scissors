const choiceButton = document.querySelectorAll('.choice-button');
const chosenWeapon = document.querySelector('.javascript-result');
const resultText = document.querySelector('.move-command');
const scorecard = document.querySelector('#javascript-scorecard');

let computer;
let player;
let playerScore = 0;
let computerScore = 0;

choiceButton.forEach(button => button.addEventListener('click', () => {
    player = button.textContent
    getComputerChoice();
    chosenWeapon.textContent = `Computer has chosen: ${computer}`; 
    checkWinner();
    scorecard.textContent = `${playerScore} : ${computerScore}`
}));

function getComputerChoice() {
    const weaponIndex = Math.floor(Math.random() * 3) + 1;

    switch(weaponIndex) {
        case 1:
            computer = 'Rock';
            break;
        case 2: 
            computer = 'Paper';
            break
        case 3:
            computer = 'Scissors';
            break;
    }
}
function checkWinner() {
    if(player == computer) return "It´s a draw!" 
    else if(player == 'Rock' && computer == 'Scissors' || player == 'Scissors' && computer == 'Paper' || player == 'Paper' && computer == 'Rock') 
    {return "Player won!", playerScore++}
    else {return "Player has lost!", computerScore++}

}


