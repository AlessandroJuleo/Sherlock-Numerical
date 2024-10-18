let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let numbersTried = [];
let buttn = document.createElement('button');
buttn.innerHTML = 'Play Again';
buttn.id = "play-again";
let div = document.querySelector('div');
let playAgainBtn;
let guessInput = document.getElementById("guess-input");



function checkGuess() {

    let guess = document.getElementById("guess-input").value.trim();

    if (!/^\d+$/.test(guess)) {
        displayMessage("Please enter a valid whole number.");
        guessInput.value = "";
        return;
    }

    guess = parseInt(document.getElementById("guess-input").value);
    attempts++;

    if (numbersTried.includes(guess)) {
        displayMessage("You've already tried this number. Try a different one.");
        guessInput.value = "";
        return;
    }

    numbersTried.push(guess); 

    if (guess === secretNumber) {
        displayMessage(`Congratulations! You guessed the number in ${attempts} attempts.`);
        document.getElementById("guess-button").disabled = true;
        div.append(buttn);
        playAgainBtn = document.getElementById('play-again');
        playAgainBtn.addEventListener("click", clearGame);
        updateAttemptsDisplay();
        console.log(playAgainBtn);
       
    
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

function displayMessage(message) 
 {
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


function clearGame (){

    document.getElementById("guess-button").disabled = false;
    attempts = 0;
    numbersTried = [];
    displayMessage("");
    secretNumber = Math.floor(Math.random() * 100) + 1;
    guessInput.value = "";
    playAgainBtn.remove();
    updateAttemptsDisplay();

}


document.getElementById("guess-button").addEventListener("click", checkGuess);