export const deckBuilder = {
    builder: () => {
        const suits = ["espada", "oro", "basto", "copa"];
        
        // Selecciona el contenedor
        const cardsContainer = document.getElementById('cards-container');
        let cardNum = 0;
        // Genera 40 cartas
        for (let i = 1; i <= 40; i++) {
            const card = document.createElement('div'); // Crea un div
            card.classList.add('card'); // Añade la clase "card"
            card.id = `card-${i}`; // Asigna un ID incremental

            const suitIndex = Math.floor((i - 1) / 10);
            const suit = suits[suitIndex];
            card.setAttribute('data-suit', suit);
            card.setAttribute('data-value', i);

            cardNum++;
            if (cardNum > 10) {
                cardNum = 1;
            }
            card.setAttribute('data-value', cardNum);

            // Añade el número y el nombre del palo en las posiciones indicadas
            const topLeft = document.createElement('div');
            topLeft.classList.add('card-corner', 'top-left');
            topLeft.textContent = `${cardNum}`;

            const bottomRight = document.createElement('div');
            bottomRight.classList.add('card-corner', 'bottom-right');
            bottomRight.textContent = `${cardNum}`;

            const center = document.createElement('div');
            center.classList.add('card-center');
            center.textContent = suit;

            card.appendChild(topLeft);
            card.appendChild(bottomRight);
            card.appendChild(center);

            cardsContainer.appendChild(card);
        }
    }
}