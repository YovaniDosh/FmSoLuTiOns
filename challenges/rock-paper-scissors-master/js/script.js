const choices = ["rock", "paper", "scissors"];
const winningMoves = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};
const choiceImages = {
  rock: "../../assets/images/rock-paper-scissors-icon-rock.svg",
  paper: "../../assets/images/rock-paper-scissors-icon-paper.svg",
  scissors: "../../assets/images/rock-paper-scissors-icon-scissors.svg",
};
const selection = document.querySelector(".selection");
const round = document.querySelector(".round");
const choiceButtons = document.querySelectorAll(".selection .choice");
const playerChoiceElement = document.getElementById("player-choice");
const houseChoiceElement = document.getElementById("house-choice");
const resultText = document.getElementById("result");
const playerScoreOutput = document.getElementById("player-score");
const houseScoreOutput = document.getElementById("house-score");
const playAgainButton = document.querySelector(".play-again");
const rulesButton = document.querySelector(".rules-button");
const rulesDialog = document.querySelector(".rules-dialog");
let playerScore = 0;
let houseScore = 0;

function getHouseChoice()
{
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getRoundResult(playerChoice, houseChoice)
{
  if (playerChoice === houseChoice)
  {
    return "draw";
  }

  return winningMoves[playerChoice] === houseChoice ? "win" : "lose";
}

function renderChoice(element, choice)
{
  element.dataset.choice = choice;
  element.querySelector("img").src = choiceImages[choice];
}

function updateScore(result)
{
  if (result === "win")
  {
    playerScore += 1;
  }
  else if (result === "lose")
  {
    houseScore += 1;
  }

  playerScoreOutput.textContent = playerScore;
  houseScoreOutput.textContent = houseScore;
}

function getMatchResult()
{
  if (playerScore === 3)
  {
    return "You win";
  }

  if (houseScore === 3)
  {
    return "You lose";
  }

  return "";
}

function resetMatch()
{
  playerScore = 0;
  houseScore = 0;
  playerScoreOutput.textContent = playerScore;
  houseScoreOutput.textContent = houseScore;
}

function playRound(playerChoice)
{
  const houseChoice = getHouseChoice();
  const roundResult = getRoundResult(playerChoice, houseChoice);
  renderChoice(playerChoiceElement, playerChoice);
  renderChoice(houseChoiceElement, houseChoice);
  updateScore(roundResult);
  const matchResult = getMatchResult();
  selection.hidden = true;
  round.hidden = false;
  resultText.textContent = matchResult || (roundResult === "draw" ? "Draw" : `Round ${roundResult}`);
  playAgainButton.textContent = matchResult ? "New game" : "Play again";
  playAgainButton.focus();
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => playRound(button.dataset.choice));
});

playAgainButton.addEventListener("click", () => {
  if (getMatchResult())
  {
    resetMatch();
  }

  round.hidden = true;
  selection.hidden = false;
  choiceButtons[0].focus();
});

rulesButton.addEventListener("click", () => {
  rulesDialog.showModal();
});
