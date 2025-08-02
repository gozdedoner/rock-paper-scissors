function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();
  const winMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (player === computer) {
    return `It's a Tie! You both chose ${playerSelection}.`;
  }
  if (winMap[player] === computer) {
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  }
  return `You Lose! ${computerSelection} beats ${playerSelection}.`;
}

function getPlayerChoice() {
  const validChoices = {
    r: "Rock",
    rock: "Rock",
    p: "Paper",
    paper: "Paper",
    s: "Scissors",
    scissors: "Scissors",
  };

  while (true) {
    const input = prompt(
      "Evil Al: Choose your weapon! Rock, Paper or Scissors (or r/p/s):"
    );
    if (input === null) {
      console.log("Evil Al: Coward! You quit the game. I win!");
      return null;
    }

    const choice = input.trim().toLowerCase();
    if (validChoices[choice]) {
      return validChoices[choice];
    }
    console.log(
      "Evil Al: Invalid input! Choose Rock, Paper or Scissors (or r/p/s)."
    );
  }
}

function askPlayAgain() {
  return confirm("Would you like to play again?");
}

function gameIntro() {
  console.log("🧠 Welcome to EVIL AL’S WORLD DOMINATION CHALLENGE!");
  console.log(
    "💀 Evil Al, the notorious AI overlord, is attempting to conquer Earth... with Rock, Paper, Scissors!"
  );
  console.log(
    "Your mission, brave human, is to defeat him in a 5-round battle using your wits and a bit of luck."
  );
  console.log(
    "🎯 HOW TO PLAY:\n- Enter 'Rock', 'Paper', or 'Scissors'\n- Or simply use shortcuts: 'r', 'p', 's'"
  );
  console.log("📱 Tip: Press Cancel to surrender (Al will mock you!)");
  console.log(
    "⚔️ Let the battle begin... and may the odds be ever in your favor!\n"
  );
}

function game() {
  gameIntro();
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`\n--- Round ${round} ---`);
    const playerSelection = getPlayerChoice();
    if (playerSelection === null) {
      return;
    }

    const computerSelection = computerPlay();
    console.log(`You chose: ${playerSelection}`);
    console.log(`Evil Al chose: ${computerSelection}`);

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }

    console.log(`Score — You: ${playerScore}, Evil Al: ${computerScore}`);
  }

  console.log("\n--- Game Over ---");
  if (playerScore > computerScore) {
    console.log("🎉 You defeated Evil Al! The world is safe... for now.");
  } else if (computerScore > playerScore) {
    console.log("💀 Evil Al wins! Humanity is doomed.");
  } else {
    console.log("🤖 It's a tie! Evil Al is confused, but still menacing.");
  }
}

function startGame() {
  let playing = true;
  while (playing) {
    game();
    playing = askPlayAgain();
    if (playing) {
      console.log("\nEvil Al: Round 2? You dare challenge me again?");
    } else {
      console.log("\nEvil Al: Until we meet again... MWAHAHA!");
    }
  }
}

startGame();
