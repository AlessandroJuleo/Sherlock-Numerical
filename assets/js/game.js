// Generate a random number between 1 and 100 for the game
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Initialize variables for the game
let attempts = 0; // Track the number of attempts
let numbersTried = []; // Array to store numbers already guessed
let guessInput = document.getElementById("guess-input"); // Input field for the user's guesses
let div = document.querySelector('.game-container'); // Game container

// Create the "Play Again" button but hide it initially
let playAgainBtn = document.createElement('button');
playAgainBtn.innerHTML = 'Play Again';
playAgainBtn.id = "play-again";
playAgainBtn.style.display = 'none'; // Hide the button initially
div.append(playAgainBtn); // Append the button to the game container

// Event listener for the "Play Again" button, which resets the game
playAgainBtn.addEventListener("click", clearGame);

// Function to check the user's guess
function checkGuess() {
    let guess = guessInput.value.trim();

    // Validate the guess (ensure it's a valid number between 1 and 100)
    if (!/^\d+$/.test(guess) || guess < 1 || guess > 100) {
        displayMessage("Please enter a valid whole number between 1 and 100.");
        guessInput.value = ""; // Clear the input after an invalid guess
        return; // Exit the function early if the guess is invalid
    }

    // Convert the guess to an integer and increment the attempt counter
    guess = parseInt(guess);
    attempts++;

    // Check if the guess has been tried before
    if (numbersTried.includes(guess)) {
        displayMessage("You've already tried this number. Try a different one.");
        guessInput.value = ""; // Clear the input after a repeated guess
        return; // Exit the function early if the guess has already been tried
    }

    // Add the guess to the array of tried numbers
    numbersTried.push(guess);

    // Check if the guess is correct
    if (guess === secretNumber) {
        displayMessage(`Congratulations! You guessed the number in ${attempts} attempts.`);
        document.getElementById("guess-button").disabled = true; // Disable the guess button after winning
        playAgainBtn.style.display = 'inline'; // Show the "Play Again" button
        updateAttemptsDisplay(); // Update the attempts display

    } else if (guess < secretNumber) {
        // Feedback for a guess that's too low
        displayMessage("Too low! Try again.");
        guessInput.value = ""; // Clear the input
        updateAttemptsDisplay(); // Update the attempts display

    } else {
        // Feedback for a guess that's too high
        displayMessage("Too high! Try again.");
        guessInput.value = ""; // Clear the input
        updateAttemptsDisplay(); // Update the attempts display
    }
}

// Function to display messages to the user
function displayMessage(message) {
    document.getElementById("message").textContent = message; // Display the provided message
}

// Function to update the display of attempts and numbers tried
function updateAttemptsDisplay() {
    let attemptsDisplay = document.getElementById("attempts-display");

    // If no attempts display exists, create one
    if (!attemptsDisplay) {
        attemptsDisplay = document.createElement("p");
        attemptsDisplay.id = "attempts-display";
        div.append(attemptsDisplay); // Append it to the game container
    }

    // Display the list of numbers tried
    attemptsDisplay.textContent = `Numbers tried: ${numbersTried.join(", ")}`;
}

// Function to reset the game when the "Play Again" button is clicked
function clearGame() {
    document.getElementById("guess-button").disabled = false; // Enable the guess button
    attempts = 0; // Reset the number of attempts
    numbersTried = []; // Clear the array of tried numbers
    displayMessage(""); // Clear any displayed messages
    secretNumber = Math.floor(Math.random() * 100) + 1; // Generate a new random number
    guessInput.value = ""; // Clear the input field
    playAgainBtn.style.display = 'none'; // Hide the "Play Again" button
    updateAttemptsDisplay(); // Update the display for the new game
    guessInput.focus(); // Focus on the input field for the next guess
}

// Add an event listener for the "Guess" button to check the guess when clicked
document.getElementById("guess-button").addEventListener("click", checkGuess);
