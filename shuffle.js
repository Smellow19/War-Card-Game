'use strict'

// Shortcut to get elements, this will be in literally every .js file I write
const el = (element) => {
    if (element.charAt(0) === "#") { // If passed an ID...
        return document.querySelector(element); // ... returns single element
    } else {
        return document.querySelectorAll(element); // Otherwise, returns a nodelist
    }
};

let player1 = [];
let player2 = [];
let currCard1 = el("#currCard1");
let currCard2 = el("#currCard2");
let p1Card;
let p2Card;
let compareResult = 0;
let temp = [];

window.onload = function() {
    sortDeck(deck);
    el("#deal").addEventListener('click', deal);
    el("#draw").addEventListener('click', () => {
        setVar();
        compareFunction();
        itWar();
        count();
    });
    el("#autoplay").addEventListener('click', () => {
        for (let i = 0; i < 1000; i++) {
            setVar();
            compareFunction();
            itWar();
            count();
        };
    });
}

let count = () => {
    el("#count1").innerHTML = 'Card Count: ' + player1.length;
    el('#count2').innerHTML = 'Card Count: ' + player2.length;
};

const deal = () => {
    let deck1 = [];
    player1 = [];
    player2 = [];
    deck1 = deck;
    for (let i = 0; i < deck1.length; i++) {
        if (i < (deck1.length / 2)) {
            player1.push(deck1[i]);
        } else {
            player2.push(deck1[i]);
        };
    };
    count();
};

const drawCard = (player, cardElement, card) => {
    let playerDeck = player;
    let cardArea = cardElement;
    let currCard = playerDeck.shift();
    if (card === p1Card) {
        p1Card = currCard;
    } else if (card === p2Card) {
        p2Card = currCard;
    };

    cardArea.style.backgroundImage = 'url(' + currCard.img + ')';
    cardArea.dataset.value = currCard.value;
};

const compareFunction = () => {

    if(Number(currCard1.dataset.value) === Number(currCard2.dataset.value)){
        compareResult = 0
        console.log('War');
        console.log(compareResult)
        return compareResult;
    }
    else if(Number(currCard1.dataset.value) > Number(currCard2.dataset.value)){
        compareResult = 1;
        console.log("Player 1 is greater.");
        console.log(compareResult)
        return compareResult;

    } else{
        compareResult = 2;
        console.log("Player 2 is greater.");
        console.log(compareResult)
        return compareResult;
    }

    count();
    console.log(compareResult);
};

const setVar = () => {
    drawCard(player1, currCard1, p1Card);
    drawCard(player2, currCard2, p2Card);
    currCard1 = el("#currCard1");
    currCard2 = el("#currCard2");
    console.log('Var reset');
}

const itWar = () => {
     temp.push(p1Card, p2Card);
     sortDeck(temp);

    if(compareResult == 0){
        for(let i = 0; i < 3; i++){
            temp.push(player1.shift());
            temp.push(player2.shift());
        }
        setVar();
        compareFunction();
        console.log(compareResult);
        itWar();


    } else if(compareResult == 1) {
        console.log('Concat1');
        player1 = player1.concat(temp)
        temp = [];
    }
    else {
        player2 = player2.concat(temp);
        console.log('Concat2');
        temp = [];
    }
        

}
