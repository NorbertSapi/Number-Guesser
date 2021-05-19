let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// function to generate a new secret target number
function generateTarget() {
  return Math.floor(10 * Math.random());
}

// function to calculate the absolute distence between guess and target
function getAbsoluteDistance(guess, target) {
  return Math.abs(guess - target);
}

// function to check validity of the user input
function alert(guess) {
  while(true)
  {
    if (isNaN(guess) || guess < 0 || guess > 9){
        return 'Input out of range. Please enter a number between 0 - 9.';
    } else {
      break;
    }
  }
}

// function to determine the winner of the guess turn
function compareGuesses(humanGuess, computerGuess, secretTargetNumber) {
  alert(humanGuess);
  let humanSum = getAbsoluteDistance(humanGuess, secretTargetNumber);
  let computerSum = getAbsoluteDistance(computerGuess, secretTargetNumber);
  if (humanGuess === computerGuess) {
    return true;
  } else if (humanSum < computerGuess) {
    return true;
  } else if (humanSum > computerGuess) {
    return false;
  } else {
    return 'Invalide input.'
  }
}

// function to increase the winner's score
function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer'){
    computerScore += 1;
  }
}

// function to update round number after every round
function advanceRound() {
  return currentRoundNumber += 1; 
}
