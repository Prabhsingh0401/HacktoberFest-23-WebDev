document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    let flippedCards = [];
    let matchedCards = [];

    cards.forEach(card => {
        card.addEventListener("click", function () {
            if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card)) {
                flipCard(card);
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    setTimeout(checkForMatch, 1000);
                }
            }
        });
    });

    function flipCard(card) {
        card.style.backgroundColor = "#fff";
        card.textContent = card.getAttribute("data-card");
    }

    function checkForMatch() {
        if (flippedCards[0].getAttribute("data-card") === flippedCards[1].getAttribute("data-card")) {
            matchedCards.push(flippedCards[0]);
            matchedCards.push(flippedCards[1]);
            flippedCards = [];

            if (matchedCards.length === cards.length) {
                document.querySelector(".message").textContent = "Congratulations! You've matched all the pairs!";
            }
        } else {
            flippedCards.forEach(card => {
                card.style.backgroundColor = "#ccc";
                card.textContent = "";
            });
            flippedCards = [];
        }
    }
});
