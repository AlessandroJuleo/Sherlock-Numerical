let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let numbersTried = [];
let guessInput = document.getElementById("guess-input");
let div = document.querySelector('.game-container'); 

// Create the Play Again button but hide it initially
let playAgainBtn = document.createElement('button');
playAgainBtn.innerHTML = 'Play Again';
playAgainBtn.id = "play-again";
playAgainBtn.style.display = 'none'; // Hide initially
div.append(playAgainBtn); // Append the button once to the game container

playAgainBtn.addEventListener("click", clearGame); // Add event listener to the Play Again button

function checkGuess() {

    let guess = document.getElementById("guess-input").value.trim();

    // Check if the input is a valid whole number
    if (!/^\d+$/.test(guess)) {
        displayMessage("Please enter a valid whole number.");
        guessInput.value = "";
        return;
    }

    guess = parseInt(guess); // Parse the guess into an integer
    attempts++;

    // Check if the number has been tried before
    if (numbersTried.includes(guess)) {
        displayMessage("You've already tried this number. Try a different one.");
        guessInput.value = "";
        return;
    }

    numbersTried.push(guess); // Add the guess to the tried numbers

    if (guess === secretNumber) {
        displayMessage(`Congratulations! You guessed the number in ${attempts} attempts.`);
        document.getElementById("guess-button").disabled = true;

        // Show the Play Again button when the game is won
        playAgainBtn.style.display = 'inline'; // Make the button visible

        updateAttemptsDisplay();
       
    } else if (guess < secretNumber) {
        displayMessage("Too low! Try again.");
        guessInput.value = "";
        updateAttemptsDisplay();
        
    } else {
        displayMessage("Too high! Try again.");
        guessInput.value = "";
        updateAttemptsDisplay();
    }
}

function displayMessage(message) {
    document.getElementById("message").textContent = message;
}

function updateAttemptsDisplay() {
    let attemptsDisplay = document.getElementById("attempts-display");
    if (!attemptsDisplay) {
        attemptsDisplay = document.createElement("p");
        attemptsDisplay.id = "attempts-display";
        div.append(attemptsDisplay);
    }
    attemptsDisplay.textContent = `Numbers tried: ${numbersTried.join(", ")}`;
}

function clearGame() {
    document.getElementById("guess-button").disabled = false;
    attempts = 0;
    numbersTried = [];
    displayMessage("");
    secretNumber = Math.floor(Math.random() * 100) + 1;
    guessInput.value = "";
    playAgainBtn.remove();
    updateAttemptsDisplay();
    guessInput.focus(); // Focus the input field for the next guess
}

// Add event listener for the guess button
document.getElementById("guess-button").addEventListener("click", checkGuess);
