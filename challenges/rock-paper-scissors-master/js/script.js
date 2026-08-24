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
const roundDelay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1200;
const selection = document.querySelector(".selection");
const round = document.querySelector(".round");
const choiceButtons = document.querySelectorAll(".selection .choice");
const playerChoiceElement = document.getElementById("player-choice");
const opponentChoiceElement = document.getElementById("opponent-choice");
const playerScoreOutput = document.getElementById("player-score");
const opponentScoreOutput = document.getElementById("opponent-score");
const rulesButton = document.querySelector(".rules-button");
const rulesDialog = document.querySelector(".rules-dialog");
const matchDialog = document.querySelector(".match-dialog");
const matchResultText = document.getElementById("match-result");
const restartButton = document.querySelector(".restart-button");
let playerScore = 0;
let opponentScore = 0;

function getOpponentChoice()
{
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getRoundResult(playerChoice, opponentChoice)
{
  if (playerChoice === opponentChoice)
  {
    return "draw";
  }

  return winningMoves[playerChoice] === opponentChoice ? "win" : "lose";
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
    opponentScore += 1;
  }

  playerScoreOutput.textContent = playerScore;
  opponentScoreOutput.textContent = opponentScore;
}

function getMatchResult()
{
  if (playerScore === 3)
  {
    return "You win";
  }

  if (opponentScore === 3)
  {
    return "You lose";
  }

  return "";
}

function showSelection()
{
  round.hidden = true;
  selection.hidden = false;
  rulesButton.disabled = false;
  choiceButtons[0].focus();
}

function resetMatch()
{
  playerScore = 0;
  opponentScore = 0;
  playerScoreOutput.textContent = playerScore;
  opponentScoreOutput.textContent = opponentScore;
  matchDialog.close();
  showSelection();
}

function finishRound(matchResult)
{
  if (matchResult)
  {
    matchResultText.textContent = matchResult === "You win" ? "🏆 You win 🎉" : "😞 You lose 💔";
    matchDialog.showModal();
    return;
  }

  showSelection();
}

function playRound(playerChoice)
{
  const opponentChoice = getOpponentChoice();
  const roundResult = getRoundResult(playerChoice, opponentChoice);
  renderChoice(playerChoiceElement, playerChoice);
  renderChoice(opponentChoiceElement, opponentChoice);
  updateScore(roundResult);
  const matchResult = getMatchResult();
  selection.hidden = true;
  round.hidden = false;
  rulesButton.disabled = true;
  window.setTimeout(() => finishRound(matchResult), roundDelay);
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => playRound(button.dataset.choice));
});

restartButton.addEventListener("click", resetMatch);

matchDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
});

rulesButton.addEventListener("click", () => {
  rulesDialog.showModal();
});
