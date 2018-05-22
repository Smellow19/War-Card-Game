'use strict'

// Shortcut to get elements, this will be in literally every .js file I write
const el = (element) => {
    if (element.charAt(0) === "#") { // If passed an ID...
        return document.querySelector(element); // ... returns single element
    } else {
        return document.querySelectorAll(element); // Otherwise, returns a nodelist
    }
};

window.onload = function() {
    sortDeck(deck);
    el("#deal").addEventListener('click', deal);
    el("#draw").addEventListener('click', () => {
        drawCard(player1, currCard1);
        drawCard(player2, currCard2);
    });

}

let player1 = [];
let player2 = [];
let currCard1 = el("#currCard1");
let currCard2 = el("#currCard2");

let count1 = () => {
    el("#count1").innerHTML = 'Card Count: ' + player1.length}

let count2 = () => {
    el('#count2').innerHTML = 'Card Count: ' + player2.length}


const deal = () => {
    let deck1 = deck;
    for (let i = 0; i < deck1.length; i++) {
        if (i < (deck1.length / 2)) {
            player1.push(deck1[i]);
        } else {
            player2.push(deck1[i]);
        };
    };
    count1();
    count2();
};

const drawCard = (player, cardElement) => {
    let playerDeck = player;
    let cardArea = cardElement;
    let currCard = playerDeck.pop();

    cardArea.style.backgroundImage = 'url(' + currCard.img + ')' ;
};