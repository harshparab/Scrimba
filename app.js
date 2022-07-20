const messageEl = document.querySelector(".message-el");
const cardEl = document.querySelector(".card-el");
const sumEl = document.querySelector(".sum-el");
const startBtn = document.querySelector(".start-btn");
const newCardBtn = document.querySelector(".new-card-btn");
const newGameBtn = document.querySelector(".new-game-btn");

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

const getRandomNumber = () => {
    let randomNumber = Math.ceil(Math.random()*13);
    if (randomNumber > 10) {
        return 10;
    }
    else if (randomNumber == 1) {
        return 11;
    }
    return randomNumber;
}

const startGame = () => { 
    if(isAlive === false) {
        isAlive = true;
        let firstCard = getRandomNumber();
        let secondCard = getRandomNumber();
        console.log(firstCard, secondCard);
        cards.push(firstCard, secondCard);
        sum = firstCard + secondCard;
        renderGame();
    }
}

const renderGame = () => {
    cardEl.textContent = "Cards: ";

    for(let i = 0; i<cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message;
}

const newCard = () => {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomNumber()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

const newGame = () => {
    cardEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
}

startBtn.addEventListener('click', startGame);
newCardBtn.addEventListener('click', newCard);
newGameBtn.addEventListener('click', newGame);