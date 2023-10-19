document.addEventListener("DOMContentLoaded", function () {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const message = document.querySelector(".message");
    const guessSubmit = document.getElementById("guessSubmit");

    guessSubmit.addEventListener("click", function () {
        const guess = document.getElementById("guessInput").value;
        attempts++;

        if (guess == secretNumber) {
            message.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
            message.style.color = "green";
            guessInput.disabled = true;
            guessSubmit.disabled = true;
        } else if (guess < secretNumber) {
            message.textContent = `Try a higher number. Attempts: ${attempts}`;
            message.style.color = "red";
        } else {
            message.textContent = `Try a lower number. Attempts: ${attempts}`;
            message.style.color = "red";
        }
    });
});
