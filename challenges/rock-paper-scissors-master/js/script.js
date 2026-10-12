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
const opponentChoiceElement = document.getElementById("opponent-choice");
const playerScoreOutput = document.getElementById("player-score");
const opponentScoreOutput = document.getElementById("opponent-score");
const roundResultText = document.getElementById("round-result");
const continueButton = document.querySelector(".continue-button");
const rulesButton = document.querySelector(".rules-button");
const rulesDialog = document.querySelector(".rules-dialog");
const matchDialog = document.querySelector(".match-dialog");
const matchResultText = document.getElementById("match-result");
const restartButton = document.querySelector(".restart-button");

let playerScore = 0;
let opponentScore = 0;
let currentMatchResult = "";

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

  const image = element.querySelector("img");

  image.src = choiceImages[choice];
  image.alt = choice.charAt(0).toUpperCase() + choice.slice(1);
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

function getRoundMessage(result)
{
  if (result === "win")
  {
    return "You win this round!";
  }

  if (result === "lose")
  {
    return "You lose this round!";
  }

  return "It's a draw!";
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
  currentMatchResult = "";

  playerScoreOutput.textContent = playerScore;
  opponentScoreOutput.textContent = opponentScore;

  if (matchDialog.open)
  {
    matchDialog.close();
  }

  showSelection();
}

function finishRound(matchResult)
{
  if (matchResult)
  {
    matchResultText.textContent = matchResult === "You win"
      ? "🏆 You win 🎉"
      : "😞 You lose 💔";

    matchDialog.showModal();
    restartButton.focus();

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

  currentMatchResult = getMatchResult();
  roundResultText.textContent = getRoundMessage(roundResult);

  selection.hidden = true;
  round.hidden = false;
  rulesButton.disabled = true;

  continueButton.focus();
}

choiceButtons.forEach((button) =>
{
  button.addEventListener("click", () =>
  {
    playRound(button.dataset.choice);
  });
});

continueButton.addEventListener("click", () =>
{
  finishRound(currentMatchResult);
});

restartButton.addEventListener("click", resetMatch);

matchDialog.addEventListener("cancel", (event) =>
{
  event.preventDefault();
});

rulesButton.addEventListener("click", () =>
{
  rulesDialog.showModal();
});
