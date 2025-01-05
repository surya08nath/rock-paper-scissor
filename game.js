function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  console.log(getComputerChoice());
  
  function getHumanChoice() {
    let userInput = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();
  
    // Validate the input to ensure it's one of the valid choices
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      return userInput;
    } else {
      console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
      return getHumanChoice(); // Prompt again if input is invalid
    }
  }
  
  // Example usage
  console.log("Your choice:", getHumanChoice());
  