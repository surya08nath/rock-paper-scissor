// Function to get a random choice for the computer
function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
      return "rock";
    } else if (randomNumber < 2 / 3) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  // Function to get the human choice
  function getHumanChoice() {
    let userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors") {
      console.log("Invalid input. Please enter rock, paper, or scissors.");
      userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    }
    return userInput;
  }
  
  // Function to play a single round
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
  
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}.`);
      return "tie";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      return "human";
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      return "computer";
    }
  }
  
  // Function to play the entire game
  function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    console.log("Welcome to Rock, Paper, Scissors! Best of 5 rounds!");
  
    for (let round = 1; round <= 5; round++) {
      console.log(`\nRound ${round}:`);
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
  
      console.log(`You chose: ${humanChoice}`);
      console.log(`Computer chose: ${computerChoice}`);
  
      const roundResult = playRound(humanChoice, computerChoice);
  
      if (roundResult === "human") {
        humanScore++;
      } else if (roundResult === "computer") {
        computerScore++;
      }
  
      console.log(`Current Score -> You: ${humanScore}, Computer: ${computerScore}`);
    }
  
    console.log("\nGame Over!");
    if (humanScore > computerScore) {
      console.log("Congratulations! You are the overall winner!");
    } else if (humanScore < computerScore) {
      console.log("The computer wins this time. Better luck next time!");
    } else {
      console.log("It's a tie overall!");
    }
  }
  
  // Start the game
  playGame();
  