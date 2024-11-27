import { uiDrag } from "./uiDrag.js";
import { deckBuilder } from "./deckBuilder.js";
import { playerDeck } from "./playerDeck.js";

deckBuilder.builder();
playerDeck.deckShuffle();
uiDrag.init(".drop-zone", ".card");

document.getElementById('reset-cards').addEventListener('click', () => {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = ''; 

    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.innerHTML = `<h2>${zone.id.charAt(0).toUpperCase() + zone.id.slice(1)}s</h2>`;
    });

    deckBuilder.builder(); 
    playerDeck.deckShuffle(); 
    uiDrag.init(".drop-zone", ".card"); 
});