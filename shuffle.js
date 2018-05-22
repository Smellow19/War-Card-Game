'use strict'
window.onload = function() {
    
    document.getElementById("deal").addEventListener('click', deal);


}

let players = [];

function Card(value, name, suit) {
    this.value = value;
    this.name = name;
    this.suit = suit;
}
function deck() {
    const name = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    let cards = [];

    for (let s = 0; s < suit.length; s++) {
        for (let n = 0; n < name.length; n++) {
            cards.push(new Card(n + 1, name[n], suit[s]));
        }
    }
    return shuffle(cards);
}

const shuffle = (cardArray) => {
    for (var i = 0; i < 10000; i++) {
        let location1 = Math.floor((Math.random() * cardArray.length));
        let location2 = Math.floor((Math.random() * cardArray.length));
        let temp = cardArray[location1];

        cardArray[location1] = cardArray[location2];
        cardArray[location2] = temp;
    }
    return cardArray;
}

let count1 = () => {
    document.getElementById('count1').innerHTML = 'Card Count: ' + players[0].length}

let count2 = () => {
    document.getElementById('count2').innerHTML = 'Card Count: ' + players[1].length}


const deal = () => {
    let deck1 = deck();
    let player1 = [];
    let player2 = [];
    for (let i = 0; i < deck1.length; i++) {
        if (i < (deck1.length / 2)) {
            player1.push(deck1[i]);
        } else {
            player2.push(deck1[i]);
        }
    }
    players.push(player1);
    players.push(player2);
    count1();
    count2();
    console.log('Player1' + player1);
    console.log('Player2' + player2);
    console.log("Deck Dealt!");
}
