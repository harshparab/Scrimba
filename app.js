const homeScoreEl = document.querySelector(".home-score-el");
const awayScoreEl = document.querySelector(".away-score-el");
const onepointBtn = document.querySelector(".one-point-btn");
const twoPointBtn = document.querySelector(".two-point-btn");
const threePointBtn = document.querySelector(".three-point-btn");
const resultEl = document.querySelector("result-el");
const newGameBtn = document.querySelector("new-game-btn");

let homeScore = 0;
let awayScore = 0;

function addOnePointHome() {
    homeScore++;
    homeScoreEl.textContent = homeScore;
}

function addTwoPointsHome() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function addThreePointsHome() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function addOnePointAway() {
    awayScore++;
    awayScoreEl.textContent = awayScore;
}

function addTwoPointsAway() {
    awayScore += 2;
    awayScoreEl.textContent = awayScore;
}

function addThreePointsAway() {
    awayScore += 3;
    awayScoreEl.textContent = awayScore;
}

function newGame() {
    homeScore = 0;
    awayScore = 0;
    homeScoreEl.textContent = 0;
    awayScoreEl.textContent = 0;
}