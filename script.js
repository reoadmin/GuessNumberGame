// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    // Get the user's guess from the input field
    const guess = parseInt(document.getElementById('guessInput').value);

    // Validate the input
    if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage('Please enter a valid number between 1 and 100.', 'red');
        return;
    }

    // Increment the number of attempts
    attempts++;

    // Check if the guess is correct
    if (guess === randomNumber) {
        setMessage(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts!`, 'green');
        document.getElementById('guessInput').setAttribute('disabled', 'true');
        showCharacter("happy");
    } else if (guess < randomNumber) {
        setMessage('Too low! Try again.', 'orange');
        showCharacter("sad");
    } else {
        setMessage('Too high! Try again.', 'orange');
        showCharacter("angry");
    }
}

function setMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
}

function showCharacter(emotion) {
    const characterElement = document.getElementById('character');
    switch(emotion) {
        case "happy":
            characterElement.innerHTML = '<circle cx="50" cy="50" r="45" fill="yellow"/><circle cx="35" cy="40" r="5" fill="black"/><circle cx="65" cy="40" r="5" fill="black"/><path d="M30 65 Q50 90 70 65" fill="none" stroke="black" stroke-width="3"/><path d="M30 65 Q50 80 70 65" fill="none" stroke="black" stroke-width="3"/>';
            break;
        case "sad":
            characterElement.innerHTML = '<circle cx="50" cy="50" r="45" fill="yellow"/><circle cx="35" cy="40" r="5" fill="black"/><circle cx="65" cy="40" r="5" fill="black"/><path d="M30 70 Q50 30 70 70" fill="none" stroke="black" stroke-width="3"/><path d="M30 70 Q50 50 70 70" fill="none" stroke="black" stroke-width="3"/>';
            break;
        case "angry":
            characterElement.innerHTML = '<circle cx="50" cy="50" r="45" fill="yellow"/><circle cx="35" cy="40" r="5" fill="black"/><circle cx="65" cy="40" r="5" fill="black"/><path d="M30 60 Q50 20 70 60" fill="none" stroke="black" stroke-width="3"/><path d="M30 60 Q50 40 70 60" fill="none" stroke="black" stroke-width="3"/>';
            break;
    }
}
